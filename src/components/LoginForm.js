import React, { Component } from 'react'
import { connect } from 'react-redux'

import { login } from '../redux/reducers/user'
// import { maxHeaderSize } from 'http';

import SignUp from './SignUp'

class LoginForm extends Component {
    constructor(props) {
        super(props) 

        

        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleChange = e => {
        let { name, value } = e.target 
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        let { email, password } = this.state
        this.props.login({ email, password })
    }

    render() {
        return (
            <div>
                <h1>Welcome to Lamppost Properties!</h1>
                <div style={styles.login}>To browse rentals, please login below</div>
                <p></p>
                <input 
                    name="email" 
                    type="text" 
                    placeholder="email" 
                    onChange={this.handleChange}/>{' '}
                <input 
                    name="password" 
                    type="password" 
                    placeholder="password" 
                    onChange={this.handleChange}/>{' '}
                <button onClick={this.handleSubmit}>login</button>
                <p style={styles.login}>Or sign up here:</p>
                <p><SignUp /></p>
            </div>
        )
    }
}

export default connect(null, { login })(LoginForm)

let styles = {
    login: {
        fontSize: 18,
        fontFamily: 'times'
    },
    logo: {
        flex: 4,
        display: 'flex',
        justifyContent: 'flex-start'
    },
    navbar: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between'
    }
}