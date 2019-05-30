import React, {Component} from 'react'
import EditRental from './EditRental'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

export default class DisplayRental extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false
        }
    }
    toggleEdit = () =>
    this.setState({
        edit: !this.state.edit
    })

    render() {
        let { rental, updateRental } = this.props

        return(
            <div className="rentalDisplay">
                {this.state.edit?
                  <EditRental
                    rental={rental}
                    toggleEdit={this.toggleEdit}
                    updateRental={updateRental}/>
                    :
                   
                    <div>
                    <h1></h1>
                    <img src={rental.imageUrl} alt="RentalPic" width="200"/>
                    <div>Monthly Price: {formatter.format(rental.price)}</div>
                    <div>bedrooms: {rental.bd}</div>
                    <div>bathrooms: {rental.bth}</div>
                    <div>square feet: {rental.sqfeet}</div>
                    <div>Street Address: {rental.address}</div>
                    <div>Zip Code: {rental.zip}</div>
                    
                    </div>
                    
                }
                {this.state.edit ?
                    <button onClick={this.toggleEdit}>cancel</button>
                    :
                    <button onClick={this.toggleEdit}>edit</button>
                } 
                <button onClick={this.props.deleteRental}>delete</button>   
            </div>
        )
            
            
          
    }


}




