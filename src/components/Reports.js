import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import '../stylesheet.css'


//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'


class Reports extends Component{

    render (){
        return(
            <div className="reports">
                <h3>Reports</h3>
                <Link to={'/PLIncome'}>
                    <a>Income</a>
                </Link>
                <Link to={'/PLExpenses'}>
                    <a>Expenses</a>
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