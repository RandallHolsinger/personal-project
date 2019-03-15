import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import './Login.css'

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
    }
    checkUser = async () => {
      const {id} = this.props;

      if(!id) {
          try {
              let res = await axios.get(`/api/current`)
              this.props.updateUser(res.data)
              this.props.history.push('/private') //update route
          } catch (err) {
          }
      } else {
          this.props.history.push('/private')// update route 
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
            this.props.updateUser(res.data)
            this.props.history.push('/private') // route
        } catch(err) {
            console.log(err)
        }
    }

    login = async () => {
        const {username, password} = this.state
        try {
            let res = await axios.post('/auth/login', {username, password})
            console.log(res)
            this.props.updateUser(res.data)
            this.props.history.push('/private') // route
        } catch (err) {
            console.log(err)
        }
    }



    render() {
        return (
           this.props.user_id ? <button>Logout</button> : <div>
           <div className='wrapper'>
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
        id: reduxState.id
    }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)