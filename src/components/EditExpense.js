import React, { Component } from 'react'
import axios from 'axios'


//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'
import { getRentals } from '../redux/reducers/rental'


class EditExpense extends Component {
    constructor(props) {
        super(props)

        let { name, date, amount, category, rentalid } = props.expense

        this.state = {
            name,
            date,
            amount,
            category,
            rentalid,

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

    handleClick = () => {
        let updatedExpense = { ...this.props.expense, ...this.state }
        this.props.updateExpense(updatedExpense)
        this.props.toggleEdit()//takes display back to original display
    }

    componentDidMount() {

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

            <div>
                <tr>
                    <td style={styles.colOne}>
                        <input
                            style={styles.colOne}
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={this.handleChange}
                            value={this.state.name} />
                    </td>
                    <td style={styles.colTwo}>
                        <input
                            style={styles.colTwo}
                            type="text"
                            name="date"
                            placeholder="Date"
                            onChange={this.handleChange}
                            value={this.state.date} />
                    </td>
                    <td style={styles.colThree}>
                        <input
                            style={styles.colThree}
                            type="text"
                            name="amount"
                            placeholder="Amount"
                            onChange={this.handleChange}
                            value={this.state.amount} />
                    </td>
                    <td style={styles.colFour}>
                        <input
                            style={styles.colFour}
                            type="text"
                            name="category"
                            placeholder="Category"
                            onChange={this.handleChange}
                            value={this.state.category} />
                    </td>
                    <td style={styles.colFive}>
                        <select name="rentalid"
                            style={styles.colFive}
                            onChange={this.handleChange}>
                            <option>{this.state.rentalid}</option>
                            {this.state.rentals.map((rental, index) => {
                                return (
                                    <option
                                        key={rental.id}
                                        value={rental.id}>{rental.id} - {rental.address}</option>
                                )
                            })}
                        </select>
                    </td>
                    <td style={styles.colSix}>
                        <button className="editbutton" onClick={this.handleClick}>Save</button>
                    </td>
                </tr>
            </div>
        )
    }



}

let mapStateToProps = state => {
    let { data: user } = state.user
    let { rentals } = state.rental
    return { user, rentals }

}


export default connect(mapStateToProps, { getUser, getRentals })(EditExpense)

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
        width: 50
    },
    colSix: {
        width: 200
    }
}