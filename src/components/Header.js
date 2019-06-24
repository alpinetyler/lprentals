import React from 'react'
import LPLogo from './images/LPLogo.png'
import Headings from './Headings'
import LandingPage from './LandingPage'
import { logout } from '../redux/reducers/user'

function Header(props) {

    return (
        <header>
            <section className="headerSection1">
                <img src={LPLogo} alt="Company Logo"/>
            </section>
            <section className="headerSectionMiddle">
            
            <LandingPage />
            </section>
            <section className="headerSection2">
                <Headings enterSearch={true} />
                {/* <select value={this.state.filter} onChange={(e) => this.setState({filter:e.target.value})}>
                        <option value="zip">Zip Code</option>
                        <option value="bd">Number of Bedrooms</option>
                        <option value="bth">Number of Bathrooms</option>
                    </select> */}

                <br></br><input onChange={props.handleSearch} value={props.filterString}
                    type="number" placeholder="Enter Zip Code" />
                <button onClick={() => props.search(props.filterString)}>Search</button>
                <button onClick={() => props.search(props.filterString)}>See All</button>
            </section>
        </header>



    )
}

export default Header