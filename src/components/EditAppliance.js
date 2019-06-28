import React, { Component } from 'react'
import axios from 'axios'


//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'
import { getRentals } from '../redux/reducers/rental'


class EditAppliance extends Component {
    constructor(props) {
        super(props)

        let { name, brand, serialnumber, rentalid, datepurchased } = props.appliance

        this.state = {
            name,
            brand,
            serialnumber,
            rentalid,
            datepurchased, 

            rentals: []
        }
    }

    handleChange = e => {
        let { value, name } = e.target

        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let updatedAppliance = { ...this.props.appliance, ...this.state }
        this.props.updateAppliance(updatedAppliance)
        this.props.toggleEdit()//takes display back to original display
    }

    componentDidMount() {

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

            <div>
                Name: <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                    value={this.state.name} />
                Brand: <input
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    onChange={this.handleChange}
                    value={this.state.brand} />
                Serial Number: <input
                    type="text"
                    name="serialnumber"
                    placeholder="Serial Number"
                    onChange={this.handleChange}
                    value={this.state.serialnumber} />
                    

                <select name="rentalid" onChange={this.handleChange}>
                    <option>{this.state.rentalid}</option>
                    {this.state.rentals.map((rental, index) => {
                        return (
                            <option
                                key={rental.id}
                                value={rental.id}>{rental.id} - {rental.address}</option>
                        )
                    })}
                </select>

                Date Purchased <input
                    type="text"
                    name="datepurchased"
                    placeholder="address"
                    onChange={this.handleChange}
                    value={this.state.datepurchased} />
                <button className="saveChangesButton" onClick={this.handleClick}>Save Changes</button>
            </div>
        )
    }



}

let mapStateToProps = state => {
    let { data: user } = state.user
    let { rentals } = state.rental
    return { user, rentals }

}


export default connect(mapStateToProps, { getUser, getRentals })(EditAppliance)