import React from 'react'
import LPLogo from './images/LPLogo.png'
// import Headings from './Headings'
import LandingPage from './LandingPage'
// import { logout } from '../redux/reducers/user'
import { Link } from 'react-router-dom';
import '../stylesheet.css'


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
            
            <input type="checkbox" id="toggle" />
                {admin &&
                    <span className="menu">
                        
                        <Link to={'/'}>
                            <a>Home</a>
                        </Link>

                        <Link to={'/Maintenance'}>
                            <a>Maintenance</a>
                        </Link>

                        <Link to={'/PayRent'}>
                            <a>Pay Rent</a>
                        </Link>

                        
                        <Link to={'/Appliances'}>
                            <a>Appliances</a>
                        </Link>

                        <Link to={'/Expenses'}>
                            <a>Expenses</a>
                        </Link>


                        <Link to={'/Reports'}>
                            <a>Reports</a>
                        </Link>

                    </span>
                }

                {user && !admin &&
                    <section className="menu">
                      <Link to={'/'}>
                            <a>Home</a>
                        </Link>  

                        <Link to={'/Maintenance'}>
                            <a>Maintenance</a>
                        </Link>

                        <Link to={'/PayRent'}>
                            <a>Pay Rent</a>
                        </Link>
                    </section>
                }
            </section>
            <section className="headerSection2">
                {user && <LandingPage />}
                <label for="toggle" class="label">&#9776;</label>
                
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