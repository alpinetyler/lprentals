import React from 'react'

function Header(props){
    return(
        <header>
            <section className="headerSection1">
                Lamppost Properties Logo
            </section>
            <section className="headerSection2">
                Search:<br></br><input type="text" placeholder="search"/>
            </section>
        </header>
            
    
    )
}

export default Header