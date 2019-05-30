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
                    <img src={rental.imageUrl} alt="RentalPic" width="200" className="houseImage"/>
                    <div><span className="bold">Monthly Rent: </span>{formatter.format(rental.price)}</div>
                    <div><span className="bold">Bedrooms: </span> {rental.bd}</div>
                    <div><span className="bold">bathrooms: </span>{rental.bth}</div>
                    <div><span className="bold">square feet: </span>{rental.sqfeet}</div>
                    <div><span className="bold">Street Address: </span>{rental.address}</div>
                    <div><span className="bold">Zip Code: </span>{rental.zip}</div>
                    
                    </div>
                    
                }
                {this.state.edit ?
                    <button className="displaybutton" onClick={this.toggleEdit}>cancel</button>
                    :
                    <button className="displaybutton" onClick={this.toggleEdit}>edit</button>
                } 
                <button className="displaybutton" onClick={this.props.deleteRental}>delete</button>   
            </div>
        )
            
            
          
    }


}




