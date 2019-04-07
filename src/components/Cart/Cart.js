import React, { Component } from 'react';
import axios from 'axios';
import './Cart.css';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux'

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: [],

        }
    }

    componentDidMount() {
        axios.get(`/api/cart/products`).then(res => {
            this.setState({
                cart: res.data
            })
        })
    }

    handleDelete = (id) => {
        axios.delete(`/api/cart/${id}`).then(res => {
            this.setState({
                cart: res.data
            })
        })
    }

    handleQuantityChange = (id, quantity) => {
        axios.put(`/api/cart/quantity/${id}/${quantity}`).then(res => {
            this.setState({
                cart: res.data
            })
        })
    }

    totalQuantity() {
        return this.state.cart.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)
    }

    totalCost() {
        return this.state.cart.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)
    }

    // stripe 

    onToken = (token) => {
        token.card = void 0;
        axios.post(`/stripe/payment`, { token, amount: this.totalCost }).then(res => {
            alert('Payment Sucessful')
        }).catch(err => {
            console.log(err)
            alert('Payment Not Completed Sucessfully')
        })
    }




    render() {
        let mappedCart = this.state.cart.map((item, index) => {
            return (
                <div key={index}>
                    <div className='cart-item'>

                        <img className='cart-img' src={item.main_img} alt={item.description} />
                        <div className='cart-item-desc'>
                            <p class='item-title'>{item.title}</p>
                            <p className='cart-desc'>{item.description}</p>
                        </div>
                        <div className='cart-info'>
                            <p className='cart-price'>Price: ${item.price}.00</p>
                            <div className='inc-dec'>
                                <span className='minus' onClick={() => this.handleQuantityChange(item.id, item.quantity - 1)}> - </span>
                                <span className='quantity'>{item.quantity}</span>
                                <span className='add' onClick={() => this.handleQuantityChange(item.id, item.quantity + 1)}> + </span>
                            </div>
                            <button className='delete-btn' onClick={() => this.handleDelete(item.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        })
        if (this.props.username !== "") {
            return (

                <div className='Cart'>
                    <div className='cartTitle'>
                        <p className='cartLogo'> Cart<i className="fas fa-shopping-cart cart2"></i></p>
                    </div>
                    <div className='cartView'>
                        {mappedCart}
                        <div className='checkout-wrapper'>
                            <div className='checkout'>
                                <p className='total-items'>Total Items: {this.totalQuantity()}</p>
                                <p className='total-cost'>Total: ${this.totalCost()}.00</p>
                                <StripeCheckout
                                    name='VinyardVines'
                                    description='By Randall'
                                    amount={this.totalCost() * 100}
                                    token={this.onToken}
                                    stripeKey={process.env.REACT_APP_STRIPE_KEY}
                                    currency='USD'
                                    image='data:image/png;base64,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'
                                    billingAddress={false}>

                                    <button className='checkout-btn'><i className="fas fa-shopping-bag myBag"></i>Checkout</button>
                                </StripeCheckout>
                            </div>

                        </div>
                    </div>
                </div>

            )
        } else {
            return (<div className='notUserCart'>
                <p className='cart-msg'>Login To View Cart! </p>
            </div>
            )
        }
    }
}

const mapStateToProps = (reduxState) => {
    return {
        username: reduxState.username
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)