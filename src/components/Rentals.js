import React, { Component } from 'react'
import axios from 'axios'
import DisplayRental from './DisplayRental';

//import displayRental from './DisplayRental'
import CreateRental from './CreateRental'

export default class Rentals extends Component {
    constructor(){
        super()

        this.state = {
            rentals: []
        }
    }

    componentDidMount() {
        axios.get('/api/rentals').then((res) => {
            this.setState({
                rentals: res.data
            })
        }).catch(err => console.log('error getting rentals:', err))
    }

    createRental = newRental => {
        axios.post('/api/rentals', newRental)
        .then(res => {
            this.setState({
                rentals: res.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        return (
            <div className="displayWrapper">
                <p>New Rental</p>
                <CreateRental createRental={this.createRental}/>
               {this.state.rentals.map(rental => {
                   return(
                    <DisplayRental
                        key={rental.id}
                        rental={rental}/>
                        
                       
                   )
               }) }
            </div>
        )
    }
}