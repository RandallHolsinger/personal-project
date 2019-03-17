import React, {Component} from 'react';
import './Home.css'
import Header from '../Header/Header'
class Home extends Component {
  

    render() {
        return (
            <div>
                <Header />
                <p className='welcome-top'>Vinyard Vines</p>
                <div className='home-img'></div>
                <p className='welcome'>WELCOME</p>
                      
                    <div className='welcome-wrapper'>
                      <div className='box-hats'>
                        <p className='item-intro'>Hats</p>
                        <img src='https://media.thetab.com/blogs.dir/9/files/2017/05/vv-940x480.jpg' alt='hats' />
                        <p className='home-content'>Take a look at our fun and stylish hats! Perfect for any boat trip or day at the beach!</p>
                        <p className='shop-now'>Shop Hats</p>
                      </div>

                      <div className='box-shirts'>
                           <p className='item-intro'>Shirts</p>
                           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfq1PiN_-4sJ0l6K0-zUDyIdmwBXOR8_VOEW289q8WqtbyezqRQ' alt='shirts' />
                           <p className='home-content'>Take a look at our fashionable shirts! Perfect for any occasion!</p>
                           <p className='shop-now'>Shop Shirts</p>
                      </div>
                      </div>
                   
                
            </div>
        )
    }
}

export default Home