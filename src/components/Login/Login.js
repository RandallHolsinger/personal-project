import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import './Login.css'
import {updateUser, clearUser} from '../../redux/reducer'
import {withRouter} from 'react-router-dom'

class Login extends Component {
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
            
           this.props.id ? <div className='user-info'>
               <p style={{color: 'white', marginRight:'30px', fontSize:'30px'}}>Welcome {this.props.reduxState.username}! </p>
               <button onClick={this.logout} className='logout-btn'>Logout</button></div> : <div>
           <div className='login-wrapper'>
             <input 
               value={this.state.username}
               onChange={this.handleUsername}
               placeholder='Username'
               className='username'
            />
             <input 
               value={this.state.password}
               onChange={this.handlePassword}
               placeholder='Password'
               type='password'
               className='password'
             />
             <button onClick={this.login} className='login-btn'>Login</button>
             <button onClick={this.register} className='signUp-btn'>Sign Up</button>
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
const loginWithRouter = withRouter(Login)
export default connect(mapStateToProps, mapDispatchToProps)(loginWithRouter)