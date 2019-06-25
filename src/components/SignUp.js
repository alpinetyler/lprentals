import React, { Component } from 'react'
import Headings from './Headings'
import axios from 'axios'

//connect redux
import { getUser } from '../redux/reducers/user'
import { connect } from 'react-redux'


class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {

            name: '',
            email: '',
            password: '',
            isadmin: '',
            rentalid: null

        }
    }
    handleChange = e => {
        let { value, name } = e.target

        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let newUser = this.state
        this.createUser(newUser)
        this.setState({
            name: '',
            email: '',
            password: '',
            isadmin: '',
            rentalid: null
        })
    }

    createUser = newUser => {
        axios.post('/auth/register', newUser)
            .then(res => {
                this.setState({
                    rentals: res.data
                })
            }).catch(err => console.log(err))
    }

    toggleAdd = () =>
        this.setState({
            add: !this.state.add
        })


    render() {
        //de-structure user from redux props
        let { user } = this.props
       
        return (
            <div className="addRentalSection">
               
        
                        <div className="addRentalForm">
                            <Headings signUp={true} />
                            <p>Name:<input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleChange}
                                value={this.state.name} /></p>
                            <p>Email Address: <input
                                type="text"
                                name="email"
                                placeholder="E-mail"
                                onChange={this.handleChange}
                                value={this.state.email} /></p>
                            <p>Password: <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                                value={this.state.password} /></p>
                                <p>Is this an Administrator?</p>
                            <p><input
                                type="radio"
                                name="isadmin"
                                onChange={this.handleChange}
                                value="true"/>Yes</p>
                                <p><input
                                type="radio"
                                name="isadmin"
                                onChange={this.handleChange}
                                value="false"/>No</p>
                            <button className="saveChangesButton" onClick={this.handleClick}>Submit</button>
                            {/* <button className="cancelbutton" onClick={this.toggleAdd}>Cancel</button> */}
                        </div>

            </div>
        )

    }
}

//connect redux
let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}
export default connect(mapStateToProps, { getUser })(SignUp)