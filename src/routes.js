import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Rentals from './components/Rentals';
import AddAppliance from './components/AddAppliance';
import AddExpense from './components/AddExpense';


export default (
  <Switch>
    <Route exact path="/" component={Rentals} />
    <Route path="/AddAppliance" component={AddAppliance} />
    <Route path="/AddExpense" component={AddExpense} /> 
  </Switch>
);