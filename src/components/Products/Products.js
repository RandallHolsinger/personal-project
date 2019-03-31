import React, { Component } from 'react'
import axios from 'axios';
import './Products.css'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
// import Product from '../Product/Product'

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []

        }
    }


    componentDidMount() {
        window.onhashchange = this.getInitialProducts
        this.getInitialProducts()
    }

    getInitialProducts = () => {
        if (this.props.location.search) {
            const values = queryString.parse(this.props.location.search)
            console.log(values)
            axios.get(`/api/productsByCategory?category=${values.category}`).then(res => {
                this.setState({
                    products: res.data
                })
            })

        } else {
            this.getAllProducts()
        }
    }

    getAllProducts = () => {
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
                    <Link to={`/product/view/${product.product_id}`} style={{ textDecoration: 'none' }} >
                        <div key={index}>
                            <p className='info'>{product.title}</p>
                            <img className='products-img' src={product.main_img} alt={product.description}/>
                            <hr />
                            <p className='price'>Price: ${product.price}.00</p>
                        </div>
                    </Link>
                </div>
            )
        })
        
        return (
            <div>
                <p className='products-logo'>Products</p>
                <div className='products-wrapper'>
                
                    {mappedItems}
                </div>
            </div>
        )
    }

}

export default Products