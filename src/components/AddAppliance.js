import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import ListAppliances from './ListAppliances'

//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'
import { getRentals } from '../redux/reducers/rental'



class AddAppliance extends Component {

    constructor(props) {
        super(props)

        this.state = {

            name: '',
            brand: '',
            datepurchased: '',
            serialnumber: '',
            rentalid: '',

            appliances: [],
            rentals: []


        }
    }
    handleChange = e => {
        let { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    createAppliance = newAppliance => {
        axios.post('/api/appliances', newAppliance)
            .then(res => {
                this.setState({
                    appliances: res.data
                })
            }).catch(err => console.log(err))
    }

    handleClick = () => {
        let newAppliance = this.state
        this.createAppliance(newAppliance)
        this.setState({
            name: '',
            brand: '',
            datepurchased: '',
            serialnumber: '',
            rentalid: ''
        })
    }

    componentDidMount() {
        axios.get('/api/appliances').then((res) => {
            this.setState({
                appliances: res.data
            })
        }).catch(err => console.log('error getting appliances:', err))

        axios.get('/api/rentals').then((res) => {
            this.setState({
                rentals: res.data
            })
        }).catch(err => console.log('error getting rentals:', err))

        //keep user logged in after refresh
        this.props.getUser()
    }




    render() {
        return (
            <div style={styles.addappliance}>
                <h3>Add Appliance</h3>
                <p>Name:<input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                    value={this.state.name} /></p>
                <p>Brand:<input
                    type="text"
                    name="brand"
                    placeholder="Brand Name"
                    onChange={this.handleChange}
                    value={this.state.brand} /></p>
                <p>Date Purchased: <input
                    type="text"
                    name="datepurchased"
                    placeholder="Date Purchased"
                    onChange={this.handleChange}
                    value={this.state.datepurchased} /></p>
                <p>Serial Number: <input
                    type="text"
                    name="serialnumber"
                    placeholder="Serial Number"
                    onChange={this.handleChange}
                    value={this.state.serialnumber} /></p>

                <p><select name="rentalid" onChange={this.handleChange}>
                    <option>Choose Address</option>
                    {this.state.rentals.map((rental, index) => {
                        return (
                            <option
                                key={rental.id}
                                value={rental.id}>{rental.address}</option>
                        )
                    })}
                </select>

                </p><p></p>
                <button onClick={this.handleClick}>Add Appliance</button><p></p>
                <Link to={'/'}>
                    <button>Back to Main</button>
                </Link>
                
                <div>
                    <ListAppliances />
                </div>

            </div>
        )
    }
}

let mapStateToProps = state => {
    let { data: user } = state.user
    let { rentals } = state.rental
    return { user, rentals }

}


export default connect(mapStateToProps, { getUser, getRentals })(AddAppliance)

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