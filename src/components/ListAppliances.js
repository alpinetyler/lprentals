import React, { Component } from 'react'
import axios from 'axios'
import AddAppliance from './AddAppliance'

//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'

class ListAppliances extends Component {

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

        this.props.getUser();
    }

    deleteAppliance = id => {
        console.log(2344, id)
        axios.delete(`/api/appliances/${id}`)
            .then(res => this.setState({ appliances: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.appliances.map((appliance, index) => {
                    return (
                        <div key={appliance.id} style={styles.addappliance}> 
                            <h3>Name: {appliance.name}</h3>
                            Brand: {appliance.brand} /
                            Serial Number: {appliance.serialnumber} / 
                            Rental Id: {appliance.rentalid} /
                            Date Purchased: {appliance.datepurchased}
                            <button className="deletebutton" onClick={() => this.deleteAppliance(appliance.id)} >delete</button>
                        </div>


                    )
                })}
            </div>
        )



    }
}

let mapStateToProps = state => {
    let { data: user } = state.user
    let { rentals } = state.rental
    return { user, rentals }

}


export default connect(mapStateToProps, { getUser })(ListAppliances)

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