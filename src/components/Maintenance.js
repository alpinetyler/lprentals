import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'
import { getRentals } from '../redux/reducers/rental'


class Maintenance extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            text: '',
            rentalid:'',

            messages: [],
            rentals: []


        }


    }

    componentDidMount() {

        //get list of rental properties for rental id menu
        axios.get('/api/rentals').then((res) => {
            this.setState({
                rentals: res.data
            })
        }).catch(err => console.log('error getting rentals:', err))

        //keep user logged in after refresh
        this.props.getUser()
    }

    createMessage = newMessage => {
        axios.post('/api/messages', newMessage)
            .then(res => {
                this.setState({
                    messages: res.data
                })
            }).catch(err => console.log(err))
    }

    deleteMessagre = id => {
        axios.delete(`/api/messages/${id}`)
            .then(res => this.setState({ messages: res.data }))
            .catch(err => console.log(err))
    }

    handleChange = e => {
        let { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let newMessage = this.state
        this.createMessage(newMessage)
        this.setState({
            title: '',
            text: '',
            rentalid: 'Choose Address'
        })
        alert(`Your message has been sent`)

    }


    render() {
        let user = this.props && this.props.user
        let admin = user && user.isadmin
        return (

            <div style={styles.addappliance}>
                {user &&
                    <>
                        <h3>Maintenance</h3>
                        <p>Address:<select name="rentalid" onChange={this.handleChange}>
                            <option>Choose Address</option>
                            {this.state.rentals.map((rental, index) => {
                                return (
                                    <option
                                        key={rental.id}
                                        value={rental.id}>{rental.address}</option>
                                )
                            })}
                        </select></p>
                        <p>Title:<input
                            type="text"
                            name="title"
                            placeholder="Title"
                            onChange={this.handleChange}
                            value={this.state.title} /></p>
                        <p>MessageText:<p></p><textarea
                            rows="6"
                            cols="60"
                            placeholder="Message Text"
                            name="text"
                            onChange={this.handleChange}
                            value={this.state.text} 
                            />
                            </p>
                            <button className="saveChangesButton" onClick={this.handleClick}>Send Message</button>

                    </>
                }

            </div>

        )
    }
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps, { getUser, getRentals })(Maintenance)

let styles = {
    addappliance: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
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