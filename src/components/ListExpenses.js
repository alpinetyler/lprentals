import React, { Component } from 'react'

import EditExpense from './EditExpense'
import Tester from './Tester'

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
                            <button className="cancelbutton" onClick={this.toggleEdit}>cancel</button>

                        </div>
                        :                                              
                        <div> 
            
                           {expense.name} / 
                            {expense.date} / 
                            {expense.amount} / 
                            {expense.category} /  
                            {expense.rentalid} / 
                                                     
                            <button className="editbutton" onClick={this.toggleEdit}>edit</button> /
                            <button className="appliancedeletebutton" onClick={this.props.deleteExpense} >delete</button>
                         
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