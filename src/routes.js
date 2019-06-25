import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Rentals from './components/Rentals';
import AddAppliance from './components/AddAppliance';
import AddExpense from './components/AddExpense';
import Maintenance from './components/Maintenance';
import Reports from './components/Reports';



export default (
  <Switch>
    <Route exact path="/" component={Rentals} />
    <Route path="/AddAppliance" component={AddAppliance} />
    <Route path="/AddExpense" component={AddExpense} />
    <Route path="/Maintenance" component={Maintenance} /> 
    <Route path="/Reports" component={Reports} /> 
  </Switch>
);