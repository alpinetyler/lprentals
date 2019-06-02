import React, {Component} from 'react'
import EditRental from './EditRental'

//display number in us currency format
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

//display number with thousands separator
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

export default class DisplayRental extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false,
            display: false
        }
    }
    
    toggleEdit = () =>
    this.setState({
        edit: !this.state.edit
    })

    //function to toggle the houseImage larger or smaller, cursor also changes to plus
    //or minus sign in App.css houseImage and houseImageBig
    toggleDisplay = () =>
    this.setState({
        display: !this.state.display
    })

    render() {
        let { rental, updateRental } = this.props

        return(
            <div className="rentalDisplay">

                
                {this.state.edit?
                    <div>
                  <EditRental
                    rental={rental}
                    toggleEdit={this.toggleEdit}
                    updateRental={updateRental}/></div>
                    :
                   
                    <div>
                    <h1></h1>
                    {this.state.display?
                    <span>
                    <img src={rental.imageUrl} alt="RentalPic" width="300" onClick={this.toggleDisplay} className="houseImageBig"/>   
                    </span>
                    :
                    <span>
                    <img src={rental.imageUrl} alt="RentalPic" width="200" onClick={this.toggleDisplay} className="houseImage"/>
                    </span>}
                    
                    <div><span className="bold">Monthly Rent: </span>{formatter.format(rental.price)}</div>
                    <div><span className="bold">Bedrooms: </span> {rental.bd}</div>
                    <div><span className="bold">bathrooms: </span>{rental.bth}</div>
                    <div><span className="bold">square feet: </span>{formatNumber(rental.sqfeet)}</div>
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




