import React, {Component} from 'react'
import plus from './images/plus.png'

export default class CreateRental extends Component {
    constructor(props){
        super(props)

        this.state = {
            
            price: '',
            bd: '',
            bth: '',
            sqfeet: '',
            address: '',
            zip: '',
            imageUrl: '',

            add: false

        }
    }
    handleChange = e => {
        let {value, name} = e.target

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
            imageUrl: '',

            add: false
        })
    }

    toggleAdd = () =>
    this.setState({
        add: !this.state.add
    })


    render() {
        return (
        <div className="inputForm">
            {this.state.add ?
            <div className="addRentalForm">
                <h1>Add Rental</h1>
            <p>Monthly Rent:<input
                type="text"
                name="price"
                placeholder="price"
                onChange={this.handleChange}
                value={this.state.price}/></p>
            <p>Bedrooms: <input
                type="text"
                name="bd"
                placeholder="bd"
                onChange={this.handleChange}
                value={this.state.bd}/></p>
            <p>Bathrooms: <input
                type="text"
                name="bth"
                placeholder="bth"
                onChange={this.handleChange}
                value={this.state.bth}/></p>
            <p>Square Feet: <input
                type="text"
                name="sqfeet"
                placeholder="sqfeet"
                onChange={this.handleChange}
                value={this.state.sqfeet}/></p>
            <p>Address: <input
                type="text"
                name="address"
                placeholder="address"
                onChange={this.handleChange}
                value={this.state.address}/></p>
            <p>Zip Code: <input
                type="text"
                name="zip"
                placeholder="zip"
                onChange={this.handleChange}
                value={this.state.zip}/></p>
            <p>Image Url: <input
                type="text"
                name="imageUrl"
                placeholder="imgUrl"
                onChange={this.handleChange}
                value={this.state.imgUrl}/></p>
                <button onClick={this.handleClick}>Submit</button>
                <button onClick={this.toggleAdd}>Cancel</button>
                </div>
                :
                <div>
                <button className="addbutton" onClick={this.toggleAdd}><img src={plus}/></button>
                </div>
            }
               </div>
        )

    }
}