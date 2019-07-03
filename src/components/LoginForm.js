import React, { Component } from 'react'
import { connect } from 'react-redux'

import { login } from '../redux/reducers/user'

import SignUp from './SignUp'

class LoginForm extends Component {
    constructor(props) {
        super(props) 

        

        this.state = {
            email: '',
            password: '',
            signup: false


        }
    }
    

     //function to toggle between Login and Signup
     toggleSignup = () =>
     this.setState({
         signup: !this.state.signup
     })


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
        console.log(this.state.signup)
        return (
            <div>
                {this.state.signup ?
                <div>
                    <SignUp />
                    <button className="cancelbutton" onClick={this.toggleSignup}>Cancel</button>
                </div>
                :
                <div>   
                <div style={styles.login}>User Login</div>
            
                <p><input
                    style={styles.input} 
                    name="email" 
                    type="text" 
                    placeholder="email" 
                    onChange={this.handleChange}/>{' '}
                </p>
                <input 
                    style={styles.input} 
                    name="password" 
                    type="password" 
                    placeholder="password" 
                    onChange={this.handleChange}/>{' '}
                <p><button onClick={this.handleSubmit}>login</button></p>
                <button style={styles.button} onClick={this.toggleSignup} >Sign Up</button>
                </div>
                
                }
            </div>

        )
    }
}

export default connect(null, { login })(LoginForm)

let styles = {
    login: {
        fontSize: 18,
        fontFamily: 'times', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        border: 'none',
        borderBottom: '1px solid lightgray',
        width: 300,
        fontSize: 15
    },
    button: {
        border: 'none',
        color: 'gray',
        fontSize: 15
    }
}