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

class ListExpenses extends Component {

    constructor(props) {
        super(props)

        this.state = {
            edit: false,
            totalPayments: []
        }
    }


    //function to toggle between display appliance and edit appliance
    toggleEdit = () =>
        this.setState({
            edit: !this.state.edit
        })

    componentDidMount() {
        //get infor for Total Payments Report
        axios.get('/api/reports').then((res) => {
            this.setState({
                totalPayments: res.data
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


    render() {
        let { user } = this.props
        let admin = user && user.isadmin

        return (


            <div style={styles.display}>
                <tr>
                    <td style={styles.colOne}><h3>Address</h3></td>
                    <td style={styles.colTwo}><h3>Payments</h3></td>
                </tr>
                {admin &&
                <>
                {this.state.totalPayments.map((payments, index) => {
                    return (
                        <tr>
                            <td style={styles.colOne}>{payments.address}</td>
                            <td style={styles.colTwo}>{formatter.format(payments.sum)}</td>

                        </tr>
                    )
                })}
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


export default connect(mapStateToProps, { getUser, getRentals })(ListExpenses)

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