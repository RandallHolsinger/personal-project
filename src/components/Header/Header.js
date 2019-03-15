import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Login from '../Login/Login'
import './Header.css'
class Header extends Component {


    render() {
        return (
            <div className='wrapper'>
                <header>
                    <img src='https://www.vineyardvines.com/on/demandware.static/-/Sites-Vineyard-Vines-Library/default/dw89695fd1/images/logos/logo@2.6x.png' className='logo' alt='Vinyard Vines'/>
                    <nav>
                       <ul>
                          <Link to={'/'} style={{textDecoration: 'none'}}>
                             <li>HOME</li>
                          </Link>
                          {/* <Link> */}
                           <li>HATS</li>
                          {/* </Link>
                          <Link> */}
                           <li>SHIRTS</li>
                           {/* </Link> */}
                       </ul>
                         <Login />
                         <p>Cart</p> <i className="fas fa-shopping-cart fa-2x myCart"></i>
                    </nav>
                </header>
                
            </div>
        )
    }
}

export default Header