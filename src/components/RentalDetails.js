import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class RentalDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false,
            display: false
        }
    }

    render(){
        return(
            <div>
            <h1>RentalDetails</h1>
            <Link to={'/'}>
                <button>Main</button>
            </Link>
            </div>

        )
    }
}