import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import '../stylesheet.css'


//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'


class Reports extends Component{

    render (){
        return(
            <div style={styles.reports} className="reports">
                <h2>Reports</h2><br></br>
                <Link to={'/PLIncome'}>
                <h3><span style={styles.icon} className="fa">&#xf155; </span>  Income</h3>
                </Link>
                <Link to={'/PLExpenses'}>
                    <h3><span style={styles.icon} className="fa">&#xf200; </span>  Expenses</h3>
                </Link>
                <Link to={'/ProfitAndLoss'}>
                    <h3><span style={styles.icon} className="fa">&#xf080; </span>  Profit & Loss</h3>
                </Link>
                <Link to={'/ListMessages'}>
                    <h3><span style={styles.icon} className="fa">&#xf0e0; </span>   Messages</h3>
                </Link>
                <Link to={'/ListUsers'}>
                    <h3><span style={styles.icon} className="fa">&#xf007; </span>  User List</h3>
                </Link>
                <Link to={'/ListPayments'}>
                    <h3><span style={styles.icon} className="fa">&#xf155; </span>  Payment List</h3>
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
    reports: {
        lineHeight: '5px'
    },
    icon: {
        fontSize: '25px'
    }
}