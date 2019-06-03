import React, {Component} from 'react'
import LPLogo from './images/LPLogo.png'
import Headings from './Headings'

function Header(props){


  

    return(
        <header>
            <section className="headerSection1">
            <img src={LPLogo}/>            
            </section>
            <section className="headerSection2">
            <Headings enterSearch={true}/> 
            {/* <select value={this.state.filter} onChange={(e) => this.setState({filter:e.target.value})}>
                        <option value="zip">Zip Code</option>
                        <option value="bd">Number of Bedrooms</option>
                        <option value="bth">Number of Bathrooms</option>
                    </select> */}
                    
                    <br></br><input onChange={props.handleSearch} 
                    type="number" placeholder="Enter Zip Code"/>
                    <button onClick={() => props.search(props.filterString)}>Search</button>
            </section>
        </header>
            
    
    
    )
}

export default Header