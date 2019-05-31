import React, { Component } from 'react'
import axios from 'axios'
import DisplayRental from './DisplayRental';
import Header from './Header'

import CreateRental from './CreateRental'

export default class Rentals extends Component {
    constructor(){
        super()

        this.state = {
            rentals: [],
            filterString:''
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

    updateRental = rental => {
        axios.put(`/api/rentals/${rental.id}`, rental)
        .then(res => this.setState({rentals: res.data}))
        .catch(err => console.log(err))
    }

    deleteRental = id => {
        axios.delete(`/api/rentals/${id}`)
        .then(res => this.setState({rentals: res.data}))
        .catch(err => console.log(err))
    }

    toggleAdd = () =>
    this.setState({
        edit: !this.state.add
    })
     
    handleSearch=(e)=>{
        this.setState({
            filterString: e.target.value
        })

    }

    render(){

        return (
            <div className="docWrapper">
            <Header handleSearch={this.handleSearch}/>
            <div className="displayWrapper">
                <section className="addRentalSection">
                    <section>
                    <CreateRental createRental={this.createRental}/>
                    </section>
                </section>

                
               {this.state.rentals.filter(rental => rental.zip.startsWith(this.state.filterString)).map(rental => {
                   return(
                   
                    <DisplayRental
                        key={rental.id}
                        rental={rental}
                        updateRental={this.updateRental}
                        deleteRental={() => this.deleteRental(rental.id)}/>
                        
                       
                   )
               }) }
            </div>
            </div>
        )
    }
}