import React, { Component } from 'react'

export default class ListUsers extends Component{

    render(){
        return (
           
            <div style={styles.center}>
                <h2>List Users</h2>
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