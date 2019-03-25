import React, {Component} from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
class Home extends Component {
  

    render() {
        return (
            <div>
                <div className='welcome-top'>
                   <p>~ Vinyard Vines ~</p>
                </div>
                <div className='home-img'></div>
                
                  <p className='welcome'>Welcome</p>
                      
                    <div className='welcome-wrapper'>
                      <div className='box-hats'>
                        <p className='item-intro'>Hats</p>
                        <img src='https://media.thetab.com/blogs.dir/9/files/2017/05/vv-940x480.jpg' alt='hats' />
                        <p className='home-content'>Take a look at our fun and stylish hats! Perfect for any boat trip or day at the beach!</p>
                        <Link to={'/products?category=hats'} style={{textDecoration: 'none' }}>
                          <p className='shop-now'>Shop Hats</p>
                        </Link>
                      </div>

                      <div className='box-shirts'>
                           <p className='item-intro'>Shirts</p>
                           <img src='https://www.vineyardvines.com/on/demandware.static/-/Sites-Vineyard-Vines-Library/default/dwd1205524/images/landing/shep_ian_story_hero_lrg.jpg' alt='shirts' />
                           <p className='home-content'>Take a look at our fashionable shirts! Perfect for any occasion!</p>
                           <Link to={'/products?category=shirts'} style={{textDecoration: 'none' }}>
                             <p className='shop-now'>Shop Shirts</p>
                           </Link>
                      </div>
                      </div>
                   
                
            </div>
        )
    }
}

export default Home