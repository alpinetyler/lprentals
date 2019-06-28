import React, { Component } from 'react'
import axios from 'axios'
import ListAppliances from './ListAppliances';
// import Header from './Header'
import AddAppliance from './AddAppliance'


//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'

class Appliances extends Component {
    constructor() {
        super()

        this.state = {
            appliances: [],
        }
    }


    componentDidMount() {
        axios.get('/api/appliances').then((res) => {
            this.setState({
                appliances: res.data
            })
        }).catch(err => console.log('error getting appliances:', err))

        //get list of rental properties for rental id menu
        axios.get('/api/rentals').then((res) => {
            this.setState({
                rentals: res.data
            })
        }).catch(err => console.log('error getting rentals:', err))

        //keep user logged in after refresh
        this.props.getUser()
    }

    createAppliance = newAppliance => {
        axios.post('/api/appliances', newAppliance)
            .then(res => {
                this.setState({
                    appliances: res.data
                })
            }).catch(err => console.log(err))
    }


    updateAppliance = appliance => {
        axios.put(`/api/appliances/${appliance.id}`, appliance)
            .then(res => this.setState({ appliances: res.data }))
            .catch(err => console.log(err))
    }

    deleteAppliance = id => {
        axios.delete(`/api/appliances/${id}`)
            .then(res => this.setState({ appliances: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        let { user } = this.props

        console.log(2222, this.state.appliances)
        return (
            <section className="docWrapper">
                <section className="displayWrapper">
                    <section className="addRentalSection">
                        <AddAppliance createAppliance={this.createAppliance} />
                    </section>
                </section>
                <span>
                    {user && //if user is logged in, display appliances
                        <div className="displayWrapper">
                            {this.state.appliances.map((appliance, index) => {
                                return (
                                    <ListAppliances
                                        key={appliance.id}
                                        index={index}
                                        appliance={appliance}
                                        updateAppliance={this.updateAppliance}
                                        deleteAppliance={() => this.deleteAppliance(appliance.id)} />
                                )
                            })}
                        </div>
                    }

                </span>

            </section>
        )
    }
}




//connect redux
let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps, { getUser })(Appliances)