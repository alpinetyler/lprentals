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

            
            <div>
               
                
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
                        
                      
                        <div style={styles.displayappliance}> 
                            
                            <tr>
                            <td style={styles.colOne}>{appliance.name}</td>
                            <td style={styles.colTwo}>{appliance.brand}</td>
                            <td style={styles.colThree}>{appliance.datepurchased}</td>
                            <td style={styles.colFour}>{appliance.serialnumber}</td> 
                            <td style={styles.colFive}>{appliance.rentalid}</td>
                            
                            <td style={styles.colSix}>                        
                            <button className="editbutton" onClick={this.toggleEdit}>edit</button>
                            <button className="appliancedeletebutton" onClick={this.props.deleteAppliance} >delete</button>
                            </td>
                            </tr>
                        
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
    displayappliance: {
        // width: 700,
        // borderBottom: '1px solid gray'

    },
    colOne: {
        width: 200
    },
    colTwo: {
        width: 100
    },
    colThree: {
        width: 150
    },
    colFour: {
        width: 200
    },
    colFive: {
        width: 50
    },
    colSix: {
        width: 200
    }
}