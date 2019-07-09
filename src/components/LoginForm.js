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
                <div style={styles.loginbox}>   
                <h3>User Login</h3>
            
                <p><span style={styles.icon} className="fa">&#xf007; </span>
                <input
                    style={styles.input} 
                    name="email" 
                    type="text" 
                    placeholder=" E-mail" 
                    onChange={this.handleChange}/>{' '}
                </p>
                <span style={styles.icon} className="fa">&#xf023; </span>
                <input 
                    style={styles.input} 
                    name="password" 
                    type="password" 
                    placeholder="  Password" 
                    onChange={this.handleChange}/>{' '}
                <p><button className="saveChangesButton" onClick={this.handleSubmit}>login</button></p>
                <button className="signupbutton" onClick={this.toggleSignup} >Sign Up</button>
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
    // button: {
    //     border: 'none',
    //     color: 'gray',
    //     fontSize: 15
    // },
    loginbox: {

        border: '1px black solid',
        padding: '10px 10px 10px 50px',
        margin: '10px',
        // background: 'lightblue',
        width: '330px',
        border: 'black 2px solid',
        boxShadow: '10px 10px 5px grey'
    },
    icon: {
        fontSize: '25px'
    }
    
}