import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import ListExpenses from './ListExpenses'

//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'
import { getRentals } from '../redux/reducers/rental'



class AddExpense extends Component {

    constructor(props) {
        super(props)

        this.state = {

            name: '',
            date: '',
            amount: '',
            category: '',
            rentalid: '',

            expenses: [],
            rentals: [],

            add: false


        }
    }
    handleChange = e => {
        let { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    

    handleClick = () => {
        let newExpense = this.state
        this.props.createExpense(newExpense)
        this.setState({
            name: '',
            date: '',
            amount: '',
            category: '',
            rentalid: '',

            add: false
        })
    }

    toggleAdd = () =>
        this.setState({
            add: !this.state.add
        })

    componentDidMount() {

        //get list of rental properties for rental id menu
        axios.get('/api/rentals').then((res) => {
            this.setState({
                rentals: res.data
            })
        }).catch(err => console.log('error getting rentals:', err))

        //keep user logged in after refresh
        this.props.getUser()
    }




    render() {
        //de-structure user from redux props
        let { user } = this.props
        // separate out admin property to test if user is admin
        let admin = user && user.isadmin
        return (
            <div className="addRentalSection">
                {this.state.add ?
                    <section>
                        <div className="addRentalForm">
                            <p><input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleChange}
                                value={this.state.name} /></p>
                            <p><input
                                type="text"
                                name="date"
                                placeholder="Date"
                                onChange={this.handleChange}
                                value={this.state.date} /></p>
                            <p><input
                                type="text"
                                name="amount"
                                placeholder="Amount"
                                onChange={this.handleChange}
                                value={this.state.amount} /></p>
                            <p><input
                                type="text"
                                name="category"
                                placeholder="Category"
                                onChange={this.handleChange}
                                value={this.state.category} /></p>
                            <p><select name="rentalid" onChange={this.handleChange}>
                                <option>Choose Address</option>
                                {this.state.rentals.map((rental, index) => {
                                    return (
                                        <option
                                            key={rental.id}
                                            value={rental.id}>{rental.address}</option>
                                    )
                                })}
                            </select></p>
                            
                
                            <button className="saveChangesButton" onClick={this.handleClick}>Add Expense</button>
                            <button className="cancelbutton" onClick={this.toggleAdd}>Cancel</button>
                        </div>



                    </section>


                    :
                    <section>
                        {admin && //if user is admin, display the Add Rental button, otherwise hide it
                            <section>
                                <p><button className="addbutton" onClick={this.toggleAdd}>Add Expense</button></p>
                            </section>
                        }
                    </section>

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


export default connect(mapStateToProps, { getUser, getRentals })(AddExpense)

let styles = {
    addappliance: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}