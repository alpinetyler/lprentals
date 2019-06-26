import React, { Component } from 'react'
import axios from 'axios'
import AddAppliance from './AddAppliance'

export default class ListAppliances extends Component {

    constructor(props) {
        super(props)
        this.state = {
            appliances: []
        }
    }
    componentDidMount() {
        axios.get('/api/appliances').then((res) => {
            this.setState({
                appliances: res.data
            })
        }).catch(err => console.log('error getting appliances:', err))
    }

    render() {
        return (
            <div>
                {this.state.appliances.map((appliance) => {
                    return (
                        <div style={styles.addappliance}> 
                            <h3>Name: {appliance.name}</h3>
                            Brand: {appliance.brand} /
                            Serial Number: {appliance.serialnumber} / 
                            Rental Id: {appliance.rentalid} /
                            Date Purchased: {appliance.datepurchased}
                        </div>


                    )
                })}
            </div>
        )



    }
}

let styles = {
    addappliance: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    logo: {
        flex: 4,
        display: 'flex',
        justifyContent: 'flex-start'
    },
    navbar: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between'
    }
}