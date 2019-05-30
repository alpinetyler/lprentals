import React, {Component} from 'react'

export default class EditRental extends Component {
    constructor(props) {
        super(props)

        let { price, bd, bth, sqfeet, address, zip, imageUrl} = props.rental  

        this.state = {
            price,
            bd,
            bth,
            sqfeet,
            address,
            zip,
            imageUrl
        }
    }

        handleChange = e => {
            let {value, name} = e.target

            this.setState({
                [name]: value
            })
        }

        handleClick = () => {
            let updatedRental = {...this.props.rental, ...this.state}
            // console.log(11111111, updatedRental)
            this.props.updateRental(updatedRental)
            this.props.toggleEdit()//takes display back to original display
        }
        
        render() {

            console.log(this.props.rental)
            return(
            
            <div className="editForm">
            <h2>Edit Rental</h2>
            <input
                type="number"
                name="price"
                placeholder="price"
                onChange={this.handleChange}
                value={this.state.price}/>
            <input
                type="number"
                name="bd"
                placeholder="bd"
                onChange={this.handleChange}
                value={this.state.bd}/>
            <input
                type="number"
                name="bth"
                placeholder="bth"
                onChange={this.handleChange}
                value={this.state.bth}/>
            <input
                type="number"
                name="sqfeet"
                placeholder="sqfeet"
                onChange={this.handleChange}
                value={this.state.sqfeet}/>
            <input
                type="text"
                name="address"
                placeholder="address"
                onChange={this.handleChange}
                value={this.state.address}/>
            <input
                type="text"
                name="zip"
                placeholder="zip"
                onChange={this.handleChange}
                value={this.state.zip}/>
            <input
                type="text"
                name="imageUrl"
                placeholder="imageUrl"
                onChange={this.handleChange}
                value={this.state.imageUrl}/>
                <button onClick={this.handleClick}>Update Rental</button>
                </div>
            )
        }


    
}