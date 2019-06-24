import React, { Component } from 'react'
import Headings from './Headings'

//connect redux
import { getUser } from '../redux/reducers/user'
import { connect } from 'react-redux'


class CreateRental extends Component {
    constructor(props) {
        super(props)

        this.state = {

            price: '',
            bd: '',
            bth: '',
            sqfeet: '',
            address: '',
            zip: '',
            imageurl: '',

            add: false

        }
    }
    handleChange = e => {
        let { value, name } = e.target

        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let newRental = this.state
        this.props.createRental(newRental)
        this.setState({
            price: '',
            bd: '',
            bth: '',
            sqfeet: '',
            address: '',
            zip: '',
            imageurl: '',

            add: false
        })
    }

    toggleAdd = () =>
        this.setState({
            add: !this.state.add
        })


    render() {
        //de-structure user from redux props
        let { user } = this.props
        // separate out admin property to test if user is admin
        let admin = user && user.isadmin
        return (
            <div className="addRentalSection">
                {this.state.add ?
                    <section>
                        <div className="addRentalForm">
                            <Headings addRental={true} />
                            <p>Monthly Rent:<input
                                type="text"
                                name="price"
                                placeholder="Monthly Rent"
                                onChange={this.handleChange}
                                value={this.state.price} /></p>
                            <p>Bedrooms: <input
                                type="text"
                                name="bd"
                                placeholder="Bedrooms"
                                onChange={this.handleChange}
                                value={this.state.bd} /></p>
                            <p>Bathrooms: <input
                                type="text"
                                name="bth"
                                placeholder="Bathrooms"
                                onChange={this.handleChange}
                                value={this.state.bth} /></p>
                            <p>Square Feet: <input
                                type="text"
                                name="sqfeet"
                                placeholder="Square Feet"
                                onChange={this.handleChange}
                                value={this.state.sqfeet} /></p>
                            <p>Address: <input
                                type="text"
                                name="address"
                                placeholder="Street Address"
                                onChange={this.handleChange}
                                value={this.state.address} /></p>
                            <p>Zip Code: <input
                                type="text"
                                name="zip"
                                placeholder="Zip Code"
                                onChange={this.handleChange}
                                value={this.state.zip} /></p>
                            <p>Image Url: <input
                                type="text"
                                name="imageurl"
                                placeholder="Image Url"
                                onChange={this.handleChange}
                                value={this.state.imgUrl} /></p>
                            <button className="saveChangesButton" onClick={this.handleClick}>Add Rental</button>
                            <button className="cancelbutton" onClick={this.toggleAdd}>Cancel</button>
                        </div>



                    </section>


                    :
                    <section>
                        {admin && //if user is admin, display the Add Rental button, otherwise hide it
                            <section>
                                <p><button className="addbutton" onClick={this.toggleAdd}>Add Rental</button></p>
                            </section>
                        }
                    </section>

                }

            </div>
        )

    }
}

//connect redux
let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}
export default connect(mapStateToProps, { getUser })(CreateRental)