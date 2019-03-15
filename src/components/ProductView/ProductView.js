import React, {Component} from 'react';
import Header from '../Header/Header'
import axios from 'axios';
import './ProductView.css'
class ProductView extends Component {
       constructor(props) {
           super(props)


           this.state = {
               product: {}

           }
       }
     
    // send this.props.match.params.productId through axios call.

    addToCart = () => {

    }

    componentDidMount() {
        axios.get(`/api/product/${this.props.match.params.productId}`).then(res => {
            this.setState({
                product: res.data[0]
            })
        })
    }
    
    render() {
        const {product} = this.state
        return (
          <div className='productView'>
                <Header />
             <div className='proView-wrapper'>
                    <img className='product-img' src={product.main_img} alt={product.description}/>
                     <div className='desc-wrapper'>
                    <p className='view-info'>{product.title}</p>
                    <p className='description'>{product.description}</p>
                    <p className='proView-price'>Price: ${product.price}.00</p>
                    <button className='cart-btn' onClick={this.addToCart}><i className="fas fa-shopping-cart fa-1x addCartLogo"></i>Add To Cart</button>
                  </div>
               </div>
           </div>
        )
    }
}

export default ProductView