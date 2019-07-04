import React from 'react';
import './App.css';
// import Rentals from './components/Rentals'
import { HashRouter } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'
// import LandingPage from './components/LandingPage'

function App() {
  return (
    <HashRouter>
      <div className="App">
      <Header  />
        {routes}
      </div>
    </HashRouter>

  );
}

export default App;
