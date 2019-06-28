import React, { Component } from 'react'

export default class Tester extends Component{

    render(){
        return (
           
            <div>
                <div className="rTable">
                    <div className="rTableRow">
                        <div className="rTableHead"><strong>Name</strong></div>
                        <div className="rTableHead">Telephone</div>
                        <div className="rTableHead">Calls</div>
                        <div className="rTableHead">Calls</div>
                        <div className="rTableHead">Calls</div>
                    </div>
                    <div class="rTableRow">
                        <div className="rTableCell">John</div>
                        <div className="rTableCell"><a href="tel:0123456785">0123 456 785</a></div>
                        <div className="rTableCell">5</div>
                        <div className="rTableCell">5</div>
                        <div className="rTableCell">5</div>
                    </div>
                    <div class="rTableRow">
                        <div class="rTableCell">Cassie</div>
                        <div class="rTableCell"><a href="tel:9876532432">9876 532 432</a></div>
                        <div class="rTableCell">3</div>
                        <div class="rTableCell">3</div>
                        <div class="rTableCell">3</div>

                    </div>
                </div>
            </div>

        )
    }
}
