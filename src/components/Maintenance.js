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
            rentalid: '',
            address: '',

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
        console.log(666, newMessage)
        axios.post('/api/messages', newMessage)
            .then(res => {
                this.setState({
                    messages: res.data
                })
                alert(`Your message has been sent, we will get back to you as soon as possible!`)
            }).catch(err => alert(`Error sending message`))

    }

    deleteMessage = id => {
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

    handleSelect = e => {
        let { value } = e.target
        this.setState({
            rentalid: value,
            address: this.state.rentals.find(rental => rental.id == value).address
        })
    }

    handleClick = () => {
        // console.log(33333, this.state.address)
        let newMessage = this.state
        this.createMessage(newMessage)
        this.setState({
            title: '',
            text: '',
            rentalid: '',
            address: ''
        })


    }


    render() {
        let user = this.props && this.props.user
        // let admin = user && user.isadmin
        // let { address } = this.state.rentals
        return (

            <div style={styles.addappliance}>
                {user &&
                    <div style={styles.maintenance}>
                        <h3>Send Maintenance Request</h3>
                        <p><select name="rentalid" onChange={this.handleSelect}>
                            <option>Choose Address</option>
                            {this.state.rentals.map((rental, index) => {
                                return (
                                    <option
                                        key={rental.id}
                                        value={rental.id}>{rental.address}</option>

                                )
                            })}

                        </select></p>
                        <p><input
                            type="text"
                            name="title"
                            placeholder="Message Title"
                            onChange={this.handleChange}
                            value={this.state.title} /></p>
                        <p><textarea
                            rows="6"
                            cols="50"
                            placeholder="Message Text"
                            name="text"
                            onChange={this.handleChange}
                            value={this.state.text}
                        />
                        </p>
                        <button className="saveChangesButton" onClick={this.handleClick}>Send Message</button>

                    </div>
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
        alignItems: 'center',
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
    },
    maintenance: {
        padding: '10px 10px 10px 50px',
        margin: '10px',
        // background: 'lightblue',
        width: '330px',
        border: 'black 2px solid',
        boxShadow: '10px 10px 5px grey'

    }
}