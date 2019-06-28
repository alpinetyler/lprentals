import React, { Component } from 'react'
import axios from 'axios'
import ListAppliances from './ListAppliances';
import Header from './Header'
import AddAppliance from './AddAppliance'


//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'

class Appliances extends Component {
    constructor() {
        super()

        this.state = {
            appliances: []
        }
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





//connect redux
let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps, { getUser })(Rentals)