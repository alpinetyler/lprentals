import React from 'react'
import LPLogo from './images/LPLogo.png'

function Header(props){
    return(
        <header>
            <section className="headerSection1">
            <img src={LPLogo}/>            
            </section>
            <section className="headerSection2">
            Search by Zip:<br></br><input type="text" placeholder="Enter Zip Code"/>
            </section>
        </header>
            
    
    )
}

export default Header