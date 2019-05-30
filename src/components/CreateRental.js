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
    }

    toggleAdd = () =>
    this.setState({
        add: !this.state.add
    })


    render() {
        return (
        <div className="inputForm">
            {this.state.add ?
            <div>
                <h1>Add Rental</h1>
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
                placeholder="imgUrl"
                onChange={this.handleChange}
                value={this.state.imgUrl}/>
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