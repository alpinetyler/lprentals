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

class PLIncome extends Component {

    constructor(props) {
        super(props)

        this.state = {
            edit: false,
            income: [],
            rentals: []
        }
    }


    //function to toggle between display appliance and edit appliance
    toggleEdit = () =>
        this.setState({
            edit: !this.state.edit
        })

    componentDidMount() {
        //get infor for Total Payments Report
        // axios.get('/api/income').then((res) => {
        //     this.setState({
        //         income: res.data
        //     })
        // }).catch(err => console.log('error getting payments:', err))

        //get list of rental properties for rental id menu
        axios.get('/api/rentals').then((res) => {
            this.setState({
                rentals: res.data
            })
        }).catch(err => console.log('error getting rentals:', err))

        //keep user logged in after refresh
        this.props.getUser()
    }

    getIncome = e => {
        // console.log(33333, e.target.value)
        axios.get(`/api/income/${e.target.value}`).then((res) => {
            this.setState({
                income: res.data
            })
        }).catch(err => console.log('error getting payments:', err))
    }


    render() {
        let { user } = this.props
        let admin = user && user.isadmin

        console.log(44444, this.state.income)

        //get total expenses from all categories
        var total = this.state.income.reduce(function (accumulator, income) {
            return accumulator + +income.amount
        }, 0)


        return (


            <div style={styles.display}>
                <h3>Income</h3>
                <p><select style={styles.select}
                    name="rentalid" onChange={this.getIncome}>
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
                    <td style={styles.colOne}><h3>Date</h3></td>
                    <td style={styles.colTwo}><h3>Income</h3></td>
                </tr>
                {admin &&
                    <>
                    <table>
                        {this.state.income.map((payments, index) => {
                            return (
                                
                                <tr style={styles.shaded}>
                                    <td style={styles.colOne}>{payments.date}</td>
                                    <td style={styles.colTwo}>{formatter.format(payments.amount)}</td>

                                </tr>
                            )
                        })}
                    </table>
                        <br></br>
                        <tr>
                            <td style={styles.colOne}>Total Payments:</td>
                            <td style={styles.colTwo}>{formatter.format(total)}</td>

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


export default connect(mapStateToProps, { getUser, getRentals })(PLIncome)

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
    }
}