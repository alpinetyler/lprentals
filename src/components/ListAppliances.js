import React, { Component } from 'react'

import EditAppliance from './EditAppliance'
import '../stylesheet.css'

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

            
            <>
               
                
                {
                    this.state.edit ?
                        <>
                        
                            <EditAppliance
                                appliance={appliance}
                                toggleEdit={this.toggleEdit}
                                updateAppliance={updateAppliance} />
                        
                        </>
                        :
                        
                      
                        <> 
                            
                            <tr style={styles.displayappliance}>
                            <td style={styles.colOne}>{appliance.name}</td>
                            <td style={styles.colTwo}>{appliance.brand}</td>
                            <td style={styles.colThree}>{appliance.datepurchased}</td>
                            <td style={styles.colFour}>{appliance.serialnumber}</td> 
                            <td style={styles.colFive}>{appliance.rentalid}</td>
                            
                            <td style={styles.colSix}>                        
                            <span style={styles.edit} onClick={this.toggleEdit}><a className="hoveredit">&#9998;   </a></span>
                            <span className="fa"  style={styles.edit2} onClick={this.props.deleteAppliance} ><a className="hoverdelete">   &#xf014;</a></span>
                            </td>
                            </tr>
                        
                        </>
                        
                      
                       
                       
                }
                



            
            </>
            
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
      fontFamily: 'times-NewRoman'
      

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
        width: 175
    },
    colFive: {
        width: 75
    },
    colSix: {
        width: 200
    },
    edit: {
        fontSize: 25,
        cursor: 'pointer'
    },
    edit2: {
        fontSize: 25,
        cursor: 'pointer'
    }
}