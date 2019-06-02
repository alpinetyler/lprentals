import React, {Component} from 'react'
import LPLogo from './images/LPLogo.png'

class Header extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            filter: 'zip'
        }
    }

    
    
    
    
    render(){

        console.log(this.state.filter)
    return(
        <header>
            <section className="headerSection1">
            <img src={LPLogo}/>            
            </section>
            <section className="headerSection2">
            Filter by <select value={this.state.filter} onChange={(e) => this.setState({filter:e.target.value})}>
                        <option value="zip">Zip Code</option>
                        <option value="bd">Number of Bedrooms</option>
                        <option value="bth">Number of Bathrooms</option>
                    </select><br></br><input onChange={this.props.handleSearch} type="number" placeholder="Enter Zip Code"/>
                    {/* <button onClick={() => this.props.search(this.state.filter)}>Search</button> */}
            </section>
        </header>
            
    
    )
    }
}

export default Header