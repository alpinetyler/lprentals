import React, { Component } from 'react'
import { connect } from 'react-redux'

import { login } from '../redux/reducers/user'
import { maxHeaderSize } from 'http';

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
                <input 
                    name="email" 
                    type="text" 
                    placeholder="email" 
                    onChange={this.handleChange}/>
                <input 
                    name="password" 
                    type="password" 
                    placeholder="password" 
                    onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>login</button>
                <p style={styles.login}>Or sign up here</p>
            </div>
        )
    }
}

export default connect(null, { login })(LoginForm)

let styles = {
    login: {
        fontSize: 12
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