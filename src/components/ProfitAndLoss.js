import React, { Component } from 'react'
import PLIncome from './PLIncome'
import PLExpenses from './PLExpenses'

export default class ProfitAndLoss extends Component{

    render(){
        return (
           
            <div style={styles.center}>
                <h2>Profit & Loss</h2>
                <PLIncome />
                <br></br>
                <PLExpenses />
            </div>

        )
    }
}

let styles = {
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}