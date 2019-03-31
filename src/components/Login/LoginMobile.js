import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import './Login.css'
import {updateUser, clearUser} from '../../redux/reducer'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'

class LoginMobile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username:'',
            password: ''
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    componentDidMount(){
       this.checkUser();
       this.getUser()
    }
    checkUser = async () => {
      const {id} = this.props;

      if(!id) {
          try {
              let res = await axios.get(`/api/current`)
              this.props.updateUser(res.data)
          } catch (err) {
              console.log(err)
          }
      } 
    }
    
    handleUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    
    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    register = async () => {
        try{
            const {username, password} = this.state
            let res = await axios.post('/auth/register', {username, password})
            console.log('this is res from register', res )
            this.props.updateUser(res.data)
            console.log('this is register')
        } catch(err) {
            console.log(err)
        }
    }

    login = async () => {
        const {username, password} = this.state
        try {
            let res = await axios.post('/auth/login', {username, password})
            this.props.updateUser(res.data)
        } catch (err) {
            console.log(err)
        }
        window.location.reload()
    }
      getUser = async () => {
          const {id} = this.props
          if(!id) {
              try {
                  let res = await axios.get('/api/current')
                  this.props.updateUser(res.data)
              } catch (err) {
                  console.log('error getting user id')
              }
          }
      }
  
      logout = () => {
          axios.post('/api/logout')
          this.props.clearUser();
          console.log('this is logout front')
      }



    render() {
        return (
            <div className="login-mobile-wrapper">
                <div className={this.props.showMobileDropDown ? "mobile-drop-down" : ''} style={this.props.showMobileDropDown ? {height:"450px"} : {height: '0px'}}>
                    <div>
                        <div className='mobile-dropDown-wrapper'>
                        <div className='mobile-login-wrapper'>
                        {this.props.id ? <div className='mobile-user-info'>
                         <p className='mobile-user-welcome'>Welcome {this.props.reduxState.username}! </p>
               <button onClick={this.logout} className='mobile-logout-btn'>Logout</button></div> : <div>
                           <div className='mobile-input'>
                               <input
                                  value={this.state.username}
                                  onChange={this.handleUsername}
                                  placeholder='Username'
                                  className='mobile-username'
                                />
                               <input
                                 value={this.state.password}
                                 onChange={this.handlePassword}
                                 placeholder='Password'
                                 type='password'
                                 className='mobile-password'
                                />
                            </div>
                            <div className='mobile-btns'>
                              <button onClick={this.login} className='mobile-login-btn'>Login</button>
                              <button onClick={this.register} className='mobile-signUp-btn'>Sign Up</button>
                            </div>
                            </div>}
                            </div>
                             <hr className='dropDown-divide'/>
                             <div className='mobile-links-wrapper'>
                               <ul >
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
                             </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState)=> {
    return {
        id: reduxState.id,
        reduxState
    }
}
const mapDispatchToProps = {
  updateUser,
  clearUser
}
const loginWithRouter = withRouter(LoginMobile)
export default connect(mapStateToProps, mapDispatchToProps)(loginWithRouter)