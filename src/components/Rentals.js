import React, { Component } from 'react'
import axios from 'axios'
import DisplayRental from './DisplayRental';
import Header from './Header'

import CreateRental from './CreateRental'

export default class Rentals extends Component {
    constructor() {
        super()

        this.state = {
            rentals: [],
            filterString: ''
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
            .then(res => this.setState({ rentals: res.data }))
            .catch(err => console.log(err))
    }

    deleteRental = id => {
        axios.delete(`/api/rentals/${id}`)
            .then(res => this.setState({ rentals: res.data }))
            .catch(err => console.log(err))
    }

    toggleAdd = () =>
        this.setState({
            edit: !this.state.add
        })

    handleSearch = (e) => {
        this.setState({
            filterString: e.target.value
        })

    }

    search = (search) => {
        console.log(search)
        axios.get(`/api/rentals?searchinput=${search}`)
            .then(res => this.setState({ 
            rentals: res.data,
            filterString:''
            }))
            .catch(err => console.log(err))

           
    }


    render() {

        return (
            <section className="docWrapper">
                <Header handleSearch={this.handleSearch}
                    search={this.search}
                    filterString={this.state.filterString} />
                <section className="displayWrapper">
                    <section className="addRentalSection">
                        <section>
                            <CreateRental createRental={this.createRental}
                                numberDisplayed={this.state.rentals} />
                        </section>
                    </section>


                    {this.state.rentals.map(rental => {
                        return (

                            <DisplayRental
                                key={rental.id}
                                rental={rental}
                                updateRental={this.updateRental}
                                deleteRental={() => this.deleteRental(rental.id)} />


                        )
                    })}
                </section>
            </section>
        )
    }
}