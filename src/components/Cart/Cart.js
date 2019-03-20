import React, {Component} from 'react';
import axios from 'axios';
import './Cart.css'

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: []
        }
        // this.deleteFromCart = this.deleteFromCart.bind(this);
    }
    
    componentDidMount(){
        axios.get(`/api/cart/products`).then(res => {
            this.setState({
                cart: res.data
            })
        })
    }
    
    // deleteFromCart(id) {
    //   axios.delete(`/api/cart/${id}`).then(res => {
    //       this.setState({
    //           cart: res.data
    //       })
    //   })
    // }
   

    render() {
       let mappedCart = this.state.cart.map((item, index) => {
            return (
                <div key={index}>
                <div className='cart-item'>
                    <p class='item-title'>{item.title}</p>
                    <img className='cart-img' src={item.main_img} alt={item.description}/>
                    <p className='cart-price'>Price: ${item.price}.00</p>
                  <div className='inc-dec'>
                    <span className='minus'> - </span>
                    <span className='add'> + </span>
                  </div>
                    <button className='delete-btn'>Delete</button>
                  </div>
                </div>
            )
        })
        return(
            // if username ternary import redux 
            <div className='Cart'>
              <div className='cartTitle'>
                <p className='cartLogo'>Cart</p>
              </div>
                <div className='cartView'>
                  {mappedCart}
                </div>
              </div>
        )
    }
}

export default Cart