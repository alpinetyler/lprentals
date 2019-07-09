import React, { Component } from 'react'

export default class ListPayments extends Component{

    render(){
        return (
           
            <div style={styles.center}>
                <h2>List Payments</h2>
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