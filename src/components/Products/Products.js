import React, {Component} from 'react'
import axios from 'axios';
import './Products.css'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
// import Product from '../Product/Product'

class Products extends Component {
   constructor(props) {
       super(props)

       this.state = {
           products: []

       }
   }
   

   componentDidMount() {
      axios.get(`/api/products`).then(res => {
         this.setState({
            products: res.data
         })
     })
   }

   

   render() {
       var mappedItems = this.state.products.map((product, index) => {
           return (
            <div className='product-wrapper'>
            <Link to={`/product/view/${product.product_id}`} style={{textDecoration: 'none'}} >
               <div key={index}>
                  <p className='info'>{product.title}</p>
                  <img className='products-img' src={product.main_img} alt={product.description} style={{width:'300px', height:'300px'}} />
                  <hr/>
                  <p className='price'>Price: ${product.price}.00</p>
                </div>
            </Link>
            </div>
           )
       })
       return(
           <div >
                <Header />
                <p className='products-logo'>Products</p>
                <div className='products-wrapper'>
                
                {mappedItems}
                </div>
           </div>
       )
   }

}

export default Products