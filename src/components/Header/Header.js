import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Login from '../Login/Login'
import LoginMobile from '../Login/LoginMobile'
import './Header.css'
class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            showMobileDropDown: true
        }
    }


    render() {
        return (
            <div className='header-wrapper'>
                <header>
                    <Link to={'/'}>
                      <img src='https://www.vineyardvines.com/on/demandware.static/-/Sites-Vineyard-Vines-Library/default/dw89695fd1/images/logos/logo@2.6x.png' className='logo' alt='Vinyard Vines'/>
                    </Link>
                    <nav>
                        <div className='nav-bar-items'>
                       <ul>
                          <Link to={'/'} style={{textDecoration: 'none'}}>
                             <li>Home</li>
                          </Link>
                          <Link to={'/products'} style={{textDecoration: 'none' }}>
                           <li>Products</li>
                          </Link>
                          <Link to={'/products?category=hats'} style={{textDecoration: 'none' }}>
                           <li>Hats</li>
                          </Link>
                          <Link to={'/products?category=shirts'} style={{textDecoration: 'none' }}>
                           <li>Shirts</li>
                          </Link>
                           
                       </ul>
                       
                         <Login />
                    
                       <p className='cart-header'>Cart</p> <Link to={'/cart'}><i className="fas fa-shopping-cart fa-2x myCart"></i> </Link>
                       </div>
                       <i className="fas fa-bars fa-2x ham-icon" onClick={()=>{this.setState({showMobileDropDown:!this.state.showMobileDropDown})}}></i>
                        
                    </nav>
                </header>
                <LoginMobile showMobileDropDown={this.state.showMobileDropDown}/>
            </div>
             
        )
    }
}

export default Header