import React, { Component } from 'react'
import axios from 'axios'
import AddAppliance from './AddAppliance'
import EditAppliance from './EditAppliance'

//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'

class ListAppliances extends Component {

    constructor(props) {
        super(props)
        this.state = {
            appliances: [],
            edit: false
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

    updateAppliance = appliance => {
        axios.put(`/api/appliances/${appliance.id}`, appliance)
            .then(res => this.setState({ appliances: res.data }))
            .catch(err => console.log(err))
    }

     //function to toggle between display rental and edit rental
     toggleEdit = () =>
     this.setState({
         edit: !this.state.edit
     })

    render() {
        return (
            <div style={styles.addappliance}>
                
                {this.state.appliances.map((appliance, index) => {
                    return (
                        <>
                        {
                            this.state.edit ?
                                <div>
                                    <EditAppliance
                                        appliance={appliance}
                                        toggleEdit={this.toggleEdit}
                                        updateAppliance={this.updateAppliance} />
                                        
                                </div>
                                :
                                <div>
                                    Name: {appliance.name} /
                                    Brand: {appliance.brand} /
                                    Serial Number: {appliance.serialnumber} /
                                    Rental Id: {appliance.rentalid} /
                                    Date Purchased: {appliance.datepurchased}
                                </div>
                        }

                        {this.state.edit ?
                            <button className="cancelbutton" onClick={this.toggleEdit}>cancel</button>
                            :
                            <button className="editbutton" onClick={this.toggleEdit}>edit</button>
                        }
                        <button className="deletebutton" onClick={() => this.deleteAppliance(appliance.id)} >delete</button>

                        </>
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