import React, {Component} from 'react'
import { Link } from 'react-router-dom';

//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'


class Reports extends Component{

    render (){
        return(
            <div style={styles.addappliance}>
                <h3>Reports</h3>
                <Link to={'/Tester'}>
                    <button>Tester</button>
                </Link>
                <Link to={'/PLIncome'}>
                    <button>P&L Income</button>
                </Link>
                <Link to={'/PLExpenses'}>
                    <button>P&L Expenses</button>
                </Link>
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

export default connect(mapStateToProps, {getUser})(Reports)

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