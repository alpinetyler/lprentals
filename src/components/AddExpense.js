import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

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
            rentals: []


        }
    }
    handleChange = e => {
        let { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    createExpense = newExpense => {
        axios.post('/api/expenses', newExpense)
            .then(res => {
                this.setState({
                    expenses: res.data
                })
            }).catch(err => console.log(err))
    }

    handleClick = () => {
        let newExpense = this.state
        this.createExpense(newExpense)
        this.setState({
            name: '',
            date: '',
            amount: '',
            category: '',
            rentalid: ''
        })
    }

    componentDidMount() {
        axios.get('/api/expenses').then((res) => {
            this.setState({
                appliances: res.data
            })
        }).catch(err => console.log('error getting expenses:', err))

        axios.get('/api/rentals').then((res) => {
            this.setState({
                rentals: res.data
            })
        }).catch(err => console.log('error getting rentals:', err))

        //keep user logged in after refresh
        this.props.getUser()
    }




    render() {
        return (
            <div style={styles.addappliance}>
                <h3>Add Expense</h3>
                <p>Name:<input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                    value={this.state.name} /></p>
                <p>Date:<input
                    type="text"
                    name="date"
                    placeholder="Date"
                    onChange={this.handleChange}
                    value={this.state.date} /></p>
                <p>Amount: <input
                    type="text"
                    name="amount"
                    placeholder="Amount"
                    onChange={this.handleChange}
                    value={this.state.amount} /></p>
                <p>Category: <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    onChange={this.handleChange}
                    value={this.state.category} /></p>

                <p><select name="rentalid" onChange={this.handleChange}>
                    <option>Choose Rental</option>
                    {this.state.rentals.map((rental, index) => {
                        return (
                            <option
                                key={rental.id}
                                value={rental.id}>{rental.address}</option>
                        )
                    })}
                </select>

                </p><p></p>
                <button onClick={this.handleClick}>Add Expense</button><p></p>
                <Link to={'/'}>
                    <button>Back to Main</button>
                </Link>


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