import React, { Component } from 'react'
import {connect} from 'react-redux'

import EditRental from './EditRental'

import { getUser } from '../redux/reducers/user'


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

class DisplayRental extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false,
            display: false
        }
    }

    //function to toggle between display rental and edit rental
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

    componentDidMount(){
        this.props.getUser()
    }

    render() {
        let { rental, updateRental } = this.props
        let {user} = this.props
        let admin = user && user.isadmin        
        return (
            <div className="rentalDisplay">

                {this.state.edit ?
                    <div>
                        <EditRental
                            rental={rental}
                            toggleEdit={this.toggleEdit}
                            updateRental={updateRental} />
                    </div>
                    :

                    <div>
                        <p></p>
                        {this.state.display ?
                            <span>
                                <img src={rental.imageurl} 
                                alt="RentalPic" 
                                width="300" 
                                onClick={this.toggleDisplay} 
                                className="houseImageBig" />
                            </span>
                            :
                            <span>
                                <img src={rental.imageurl} 
                                alt="RentalPic" width="200" 
                                onClick={this.toggleDisplay} 
                                className="houseImage" />
                            </span>}

                        <div><span className="bold">
                            Monthly Rent: </span>{formatter.format(rental.price)}</div>
                        <div><span className="bold">
                            Bedrooms: </span> {rental.bd}</div>
                        <div><span className="bold">
                            bathrooms: </span>{rental.bth}</div>
                        <div><span className="bold">
                            square feet: </span>{formatNumber(rental.sqfeet)}</div>
                        <div><span className="bold">
                            Street Address: </span>{rental.address}</div>
                        <div><span className="bold">
                            Zip Code: </span>{rental.zip}</div>
                    </div>
                }


                {//Display all buttons if user is an admin, otherwise show 'See Details' button only
                }
                {admin?
                <div>
                    {this.state.edit ?
                        <button className="cancelbutton" onClick={this.toggleEdit}>cancel</button>
                        :
                        <button className="editbutton" onClick={this.toggleEdit}>edit</button>
                    }

                    {/* {admin && <button>Admin</button>} */}
                    
                    <button className="deletebutton" onClick={this.props.deleteRental}>delete</button>
                </div>
                :
                <div>
                    <button className="editbutton">See Details</button>
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
export default connect(mapStateToProps, {getUser})(DisplayRental)


