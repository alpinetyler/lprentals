import React, {Component} from 'react'
import EditRental from './EditRental'

export default class DisplayRental extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false
        }
    }

    render() {
        let { rental } = this.props
        return(
            <div>
                <img src={rental.imageUrl} alt="" width="200"/>
                <div>Address:{rental.address}</div>
                <div>Price:{rental.price}</div>
                <div>Price:{rental.bd}</div>
                <div>Price:{rental.bth}</div>
                    div>Price:{rental.sqfeet}</div>
                     
            </div>
        )
            
            
          
    }


}




