import React from 'react';
import '../App.css';

const Headings = (props) => {
    if(props.addRental) {
        return <h2>Add Rental</h2>
    }
    if(props.editRental) {
        return <h2>Edit Rental</h2>
    }
    if(props.enterSearch) {
        return 'Search by Zip Code'
    }
}


// function Headings() {
//   return (
//     <section >
//      <h2>Add Rental</h2>
//     </section>
//   );
// }

export default Headings;