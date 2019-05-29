import React, { Component } from 'react'
import axios from 'axios'

//import displayRental from './DisplayRental'
//import CreateRental from './CreateRental'

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

    render(){
        return (
            <div>
               {this.state.rentals.map(rental => {
                   return(
                       
                       
                   )
               }) }
            </div>
        )
    }
}