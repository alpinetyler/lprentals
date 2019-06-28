import React, { Component } from 'react'

import EditAppliance from './EditAppliance'
import Tester from './Tester'

//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'

class ListAppliances extends Component {

    constructor(props) {
        super(props)

        this.state = {
            edit: false
        }
    }


    //function to toggle between display appliance and edit appliance
    toggleEdit = () =>
        this.setState({
            edit: !this.state.edit
        })

    componentDidMount() {
        //keep user on state if screen is re-freshed        
        this.props.getUser();
    }

    render() {
        let { appliance, updateAppliance } = this.props
        let { user } = this.props
        let admin = user && user.isadmin

        return (
            <div style={styles.addappliance}>


                {
                    this.state.edit ?
                        <div>
                            <EditAppliance
                                appliance={appliance}
                                toggleEdit={this.toggleEdit}
                                updateAppliance={updateAppliance} />
                            <button className="cancelbutton" onClick={this.toggleEdit}>cancel</button>

                        </div>
                        :
                        <div>
                            {/* <div className="rTable"> */}
                                <div className="rTableRow">
                                    <div className="rTableCell"><strong>{appliance.name}</strong></div>
                                    <div className="rTableCell">{appliance.brand}</div>
                                    <div className="rTableCell">{appliance.serialnumber}</div>
                                    <div className="rTableCell">{appliance.datepurchased} </div>
                                    <div className="rTableCell">{appliance.rentalid}</div>
                                    <div className="rTableCell">
                                        <button className="editbutton" onClick={this.toggleEdit}>edit</button> /
                                        <button className="appliancedeletebutton" onClick={this.props.deleteAppliance} >delete</button>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                        }





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