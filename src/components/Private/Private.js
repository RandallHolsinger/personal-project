import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser, clearUser} from '../../redux/reducer';

class Private extends Component {
     

    componentDidMount() {

    }

    getUser = async () => {
        const {id} = this.props
        if(!id) {
            try {
                let res = await axios.get('/api/current')
                this.props.updateUser(res.data)
            } catch (err) {
                this.props.history.push('/') // route
            }
        }
    }

    logout = () => {
        axios.post('/auth/logout')
        this.props.clearUser();
        this.props.history.push('/') // route
    }

    render() {
        return (
            <div>
               <button onClick={this.logout}>Logout</button>
               <p>{this.props.username}</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

const mapDispatchStateToProps = {
    updateUser,
    clearUser
}

export default connect(mapStateToProps, mapDispatchStateToProps)(Private)