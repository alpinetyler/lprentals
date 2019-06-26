import React, { Component } from 'react'
import axios from 'axios'

//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'

class ListExpenses extends Component {

    constructor(props) {
        super(props)
        this.state = {
            expenses: []
        }
    }
    componentDidMount() {
        axios.get('/api/expenses').then((res) => {
            this.setState({
                expenses: res.data
            })
        }).catch(err => console.log('error getting expenses:', err))

        this.props.getUser();
    }

    render() {
        return (
            <div>
                {this.state.expenses.map((expense) => {
                    return (
                        <div style={styles.addappliance}> 
                            <h3>Name: {expense.name}</h3>
                            Date: {expense.date} /
                            Amount: {expense.amount} / 
                            Category: {expense.category} /
                            Rental ID: {expense.rentalid}
                        </div>


                    )
                })}
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