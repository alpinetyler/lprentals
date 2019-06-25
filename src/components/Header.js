import React from 'react'
import LPLogo from './images/LPLogo.png'
import Headings from './Headings'
import LandingPage from './LandingPage'
// import { logout } from '../redux/reducers/user'
import { Link } from 'react-router-dom';


//connect redux
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/user'


function Header(props) {
    let user = props && props.user
    let admin = user && user.isadmin
    return (
        
        <header>
            <section className="headerSection1">
                <Link to={'/'}>
                    <img src={LPLogo} alt="Company Logo" />
                </Link>
            </section>
            <section className="headerSectionMiddle">
            {admin && 
                <section className="headerMenu">
                   
                    <Link to={'/AddExpense'}>
                        <button>Add Expense</button>
                    </Link>
                    <Link to={'/AddAppliance'}>
                        <button>Add Appliance</button>
                    </Link>
                    <Link to={'/Maintenance'}>
                        <button>Maintenance</button>
                    </Link>
                    <Link to={'/Reports'}>
                        <button>Reports</button>
                    </Link>
                   
                </section>
            }
            </section>
            <section className="headerSection2">
                {user && <LandingPage />}
                {/* <Headings enterSearch={true} />
                <select value={this.state.filter} onChange={(e) => this.setState({filter:e.target.value})}>
                        <option value="zip">Zip Code</option>
                        <option value="bd">Number of Bedrooms</option>
                        <option value="bth">Number of Bathrooms</option>
                    </select>

                <br></br><input onChange={props.handleSearch} value={props.filterString}
                    type="number" placeholder="Enter Zip Code" />
                <button onClick={() => props.search(props.filterString)}>Search</button>
                <button onClick={() => props.search(props.filterString)}>See All</button> */}
            </section>
        </header>



    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps, { getUser })(Header)


let styles = {
    headerSectionMiddle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerMenu: {
        fontSize: 12,
        fontFamily: 'times'
    }
}