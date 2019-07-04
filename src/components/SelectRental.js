import React from 'react'

function SelectRental(props){
    return(
        <p><select style={styles.select}
    name="rentalid" onChange={props.handleChange}>
    <option>Choose Address</option>
    {this.state.rentals.map((rental, index) => {
        return (
            <option
                key={rental.id}
                value={rental.id}>{rental.address}</option>
        )
    })}
</select></p>
    )
}

export default SelectRental

let styles = {
    select: {
        marginLeft: 30
    }
}