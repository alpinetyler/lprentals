import React, { Component } from 'react'
import axios from 'axios'

import EditExpense from './EditExpense'
import Tester from './Tester'

//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'
import { getRentals } from '../redux/reducers/rental'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

class PLExpenses extends Component {

    constructor(props) {
        super(props)

        this.state = {
            plexpenses: [],
            rentals: [],
            total: 0
        }
    }


    componentDidMount() {
        //get infor for Total Payments Report
        // axios.get('/api/plexpenses').then((res) => {
        //     console.log(33333, res.data)
        //     this.setState({
        //         plexpenses: res.data
        //     })
        // }).catch(err => console.log('error getting expenses:', err))

        //get list of rental properties for rental id menu
        axios.get('/api/rentals').then((res) => {
            this.setState({
                rentals: res.data
            })
        }).catch(err => console.log('error getting rentals:', err))

        //keep user logged in after refresh
        this.props.getUser()
    }

    getExpenses = e => {
        console.log(33333, e.target.value)
        axios.get(`/api/plexpenses/${e.target.value}`).then((res) => {
            this.setState({
                plexpenses: res.data
            })
        }).catch(err => console.log('error getting payments:', err))
    }



    render() {
        let { user } = this.props;
        let admin = user && user.isadmin;
        console.log(this.state.plexpenses)
        //get total expenses from all categories
        var total = this.state.plexpenses.reduce(function (accumulator, expenses) {
            return accumulator + +expenses.expenses
        }, 0)

        return (

            <div style={styles.display}>
                <h3>Total Expenses</h3>
                <p><select style={styles.select}
                    name="rentalid" onChange={this.getExpenses}>
                    <option>Choose Address</option>
                    {this.state.rentals.map((rental, index) => {
                        return (
                            <option
                                key={rental.id}
                                value={rental.id}>{rental.address}</option>
                        )
                    })}
                </select></p>
                <tr>
                    <td style={styles.colOne}><h3>Address</h3></td>
                    <td style={styles.colTwo}><h3>Category</h3></td>
                    <td style={styles.colThree}><h3>Amount</h3></td>

                </tr>
                {admin &&
                    <>
                        <table>
                            {this.state.plexpenses.map((plexpenses, index) => {
                                return (
                                    <>

                                        <tr>
                                            <td style={styles.colOne}>{plexpenses.address}</td>
                                            <td style={styles.colTwo}>{plexpenses.category}</td>
                                            <td style={styles.colThree}>{formatter.format(plexpenses.expenses)}</td>

                                        </tr>


                                    </>
                                )

                            })}
                        </table>
                        <tr>
                            <br></br>
                            <td style={styles.colOneB}>Total Expenses:</td>
                            <td style={styles.colTwo}></td>
                            <td style={styles.colThree}>{formatter.format(total)}</td>
                        </tr>
                    </>
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


export default connect(mapStateToProps, { getUser, getRentals })(PLExpenses)

let styles = {
    display: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50
    },
    colOne: {
        width: 200
    },
    colOneB: {
        width: 200,
        fontWeight: 'bold'
    },
    colTwo: {
        width: 200
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
    }
}