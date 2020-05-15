import React, {Component} from 'react'
import axios from 'axios'
import ListExpenses from './ListExpenses'
import AddExpense from './AddExpense'


//connect redux
import {connect} from 'react-redux'
import {getUser } from '../redux/reducers/user'

class Expenses extends Component {
    constructor(){
        super()

        this.state = {
            expenses: []
        }
    }

    componentDidMount() {
        axios.get('/api/expenses').then((res) => {
            this.setState({
                expenses: res.data
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

    createExpense = newExpense => {
        axios.post('/api/expenses', newExpense)
            .then(res => {
                this.setState({
                    expenses: res.data
                })
            }).catch(err => console.log(err))
    }

    updateExpense = expense => {
        axios.put(`/api/expenses/${expense.id}`, expense)
            .then(res => this.setState({ expenses: res.data }))
            .catch(err => console.log(err))
            // alert("Changes Saved")
    }

    deleteExpense = id => {
        console.log(444, id)
        axios.delete(`/api/expenses/${id}`)
            .then(res => this.setState({ expenses: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        let { user } = this.props
        // console.log(1111, this.state.expenses)

        return (
            <section className="docWrapper">
                <section className="displayWrapper">
                    <section className="addRentalSection">
                        <AddExpense createExpense={this.createExpense} />
                    </section>
                </section>
                <span>
                    {user && //if user is logged in, display appliances
                        <div className="displayWrapper">
                            <tr>
                                <td style={styles.colOne}><h3>Name</h3></td>
                                <td style={styles.colTwo}><h3>Date</h3></td>
                                <td style={styles.colThree}><h3>Amount</h3></td>
                                <td style={styles.colFour}><h3>Category</h3></td>
                                <td style={styles.colFive}><h3>Rental</h3></td>
                                <td style={styles.colSix}><h3>Edit/Delete</h3></td>
                            </tr>
                            <table>
                            {this.state.expenses.map((expense, index) => {
                                return (
                                    <ListExpenses
                                        key={expense.id}
                                        index={index}
                                        expense={expense}
                                        updateExpense={this.updateExpense}
                                        deleteExpense={() => this.deleteExpense(expense.id)} 
                                        counter={1}/>
                                )
                            })}
                            </table>
                        </div>
                    }

                </span>

            </section>
        )
    }






}

//connect redux
let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps, { getUser })(Expenses)

let styles = {
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
        width: 75
    },
    colSix: {
        width: 200
    }
}