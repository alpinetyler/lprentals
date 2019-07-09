import React, { Component } from 'react'

import EditExpense from './EditExpense'
import '../stylesheet.css'


//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'

class ListExpenses extends Component {

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
        let { expense, updateExpense } = this.props
        let { user } = this.props
        let admin = user && user.isadmin

        return (

            
            <div>
               

                {
                    this.state.edit ?
                        <div>
                            <EditExpense
                                expense={expense}
                                toggleEdit={this.toggleEdit}
                                updateExpense={updateExpense} />
                            {/* <button className="cancelbutton" onClick={this.toggleEdit}>cancel</button> */}

                        </div>
                        :     
                        
                        <div style={styles.displayexpense}> 

                          
                        <tr style={styles.shaded}>
                        <td style={styles.colOne}>{expense.name}</td>
                        <td style={styles.colTwo}>{expense.date}</td>
                        <td style={styles.colThree}>{expense.amount}</td>
                        <td style={styles.colFour}>{expense.category}</td> 
                        <td style={styles.colFive}>{expense.rentalid}</td>
                        
                        <td style={styles.colSix}>                        
                        <span style={styles.edit} onClick={this.toggleEdit}><a className="hoveredit">&#9998; </a></span>
                        <span className="fa"  style={styles.edit2} onClick={this.props.deleteExpense} ><a className="hoverdelete"> &#xf014;</a></span>
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


export default connect(mapStateToProps, { getUser })(ListExpenses)

let styles = {
    addappliance: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    displayexpense: {
        fontFamily: 'times-NewRoman'
        
  
      },
    colOne: {
        width: 200
    },
    colTwo: {
        width: 125
    },
    colThree: {
        width: 100
    },
    colFour: {
        width: 200
    },
    colFive: {
        width: 50
    },
    colSix: {
        width: 200
    },
    edit: {
        fontSize: 25,
        cursor: 'pointer'
    },
    edit2: {
        fontSize: 23,
        cursor: 'pointer'
    }
   
}