import React, { Component } from 'react'
import axios from 'axios'
import DisplayRental from './DisplayRental';
import Header from './Header'
import CreateRental from './CreateRental'
import SignUp from './SignUp'
import LandingPage from './LandingPage'

//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'

class Rentals extends Component {
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

        //keep user logged in after refresh
        this.props.getUser()
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
        axios.get(`/api/rentals?searchinput=${search}`)
            .then(res => this.setState({
                rentals: res.data,
                filterString: ''
            }))
            .catch(err => console.log(err))


    }


    render() {
        let { user } = this.props
        return (
            <section className="docWrapper">
                {/* <Header handleSearch={this.handleSearch}
                    search={this.search}
                    filterString={this.state.filterString} /> */}
                <section className="displayWrapper">
                    <section className="addRentalSection">
                        <section>
                            <CreateRental createRental={this.createRental}
                                numberDisplayed={this.state.rentals} />
                        </section>
                    </section>

                    <span>
                        {user? // if user is logged in, display rentals
                        <div className="displayWrapper">
                            {this.state.rentals.map((rental, index) => {
                                return (

                                    <DisplayRental
                                        key={rental.id}
                                        index={index}
                                        rental={rental}
                                        updateRental={this.updateRental}
                                        deleteRental={() => this.deleteRental(rental.id)} />

                                )
                            })}
                        </div>
                        :
                        <span>
                            <LandingPage />
                        </span>
                        }

                    </span>
                </section>
            </section>
        )
    }
}


//connect redux
let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps, { getUser })(Rentals)