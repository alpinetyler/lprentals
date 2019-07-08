import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Rentals from './components/Rentals';
import AddAppliance from './components/AddAppliance';
import AddExpense from './components/AddExpense';
import Maintenance from './components/Maintenance';
import Reports from './components/Reports';
import Appliances from './components/Appliances'
import Expenses from './components/Expenses'
import Tester from './components/Tester'
import PayRent from './components/PayRent'
import PLIncome from './components/PLIncome'
import PLExpenses from './components/PLExpenses'




export default (
  <Switch>
    <Route exact path="/" component={Rentals} />
    <Route path="/AddAppliance" component={AddAppliance} />
    <Route path="/AddExpense" component={AddExpense} />
    <Route path="/Maintenance" component={Maintenance} /> 
    <Route path="/Reports" component={Reports} /> 
    <Route path="/Appliances" component={Appliances}/>
    <Route path="/Expenses" component={Expenses}/>
    <Route path="/Tester" component={Tester}/>
    <Route path="/PayRent" component={PayRent}/>
    <Route path="/PLIncome" component={PLIncome}/>
    <Route path="/PLExpenses" component={PLExpenses}/>

  </Switch>
);