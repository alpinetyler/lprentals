import React, {Component} from 'react'
import { Link } from 'react-router-dom';

//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'


class AddExpense extends Component{

    render (){
        return(
            <div style={styles.addappliance}>
                <h3>Add Expense</h3>
                <Link to={'/'}>
                    <button>Main</button>
                </Link>
                
            </div>
        )
    }
}

let mapStateToProps = state => {
    let { data: user } = state.user 
    return { user }
}

export default connect(mapStateToProps, {getUser})(AddExpense)

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