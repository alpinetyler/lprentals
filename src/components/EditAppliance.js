import React, { Component } from 'react'
import axios from 'axios'


//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'
import { getRentals } from '../redux/reducers/rental'
import { tsTypeAliasDeclaration } from '@babel/types';


class EditAppliance extends Component {
    constructor(props) {
        super(props)

        let { name, brand, serialnumber, rentalid, datepurchased } = props.appliance

        this.state = {
            name,
            brand,
            serialnumber,
            rentalid,
            datepurchased,

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
        let updatedAppliance = { ...this.props.appliance, ...this.state }
        this.props.updateAppliance(updatedAppliance)
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

            <>
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
                    name="brand"
                    placeholder="Brand"
                    onChange={this.handleChange}
                    value={this.state.brand} />
                </td>
                <td style={styles.colThree}>
                <input
                    style={styles.colThree}
                    type="text"
                    name="datepurchased"
                    placeholder="address"
                    onChange={this.handleChange}
                    value={this.state.datepurchased} />
                </td>
                <td style={styles.colFour}>
                <input
                    style={styles.colFour}
                    type="text"
                    name="serialnumber"
                    placeholder="Serial Number"
                    onChange={this.handleChange}
                    value={this.state.serialnumber} />
                </td>
                <td style={styles.colFive}>
                <select name="rentalid" style={styles.colFive}  onChange={this.handleChange}>
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
                <span className="fa" style={styles.icon} onClick={this.handleClick}>     &#xf0c7;</span>
                </td>
                </tr>
                
            </>
        )
    }



}

let mapStateToProps = state => {
    let { data: user } = state.user
    let { rentals } = state.rental
    return { user, rentals }

}


export default connect(mapStateToProps, { getUser, getRentals })(EditAppliance)

let styles = {
    colOne: {
        width: 200
    },
    colTwo: {
        width: 100
    },
    colThree: {
        width: 125
    },
    colFour: {
        width: 175
    },
    colFive: {
        width: 75
    },
    colSix: {
        width: 200
    },
    colFourEdit: {
        width: 100
    },
    icon: {
        fontSize: '25px',
        cursor: 'pointer',
    }
}