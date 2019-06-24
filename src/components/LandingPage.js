import React from 'react'
import { connect } from 'react-redux'

import LoginForm from './LoginForm'
import { logout } from '../redux/reducers/user'


function Landing(props) {



console.log(props)
    let { user } = props
    return (
        <div>
            { user ? <h1>Welcome, {user.name} </h1> : <LoginForm></LoginForm>}
            {props.user && <button onClick={props.logout}>Logout</button>}

        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user 
    return { user }
}

export default connect(mapStateToProps, {logout})(Landing)