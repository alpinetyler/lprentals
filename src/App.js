import React from 'react';
import './App.css';
import Rentals from './components/Rentals'
import { HashRouter } from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Rentals />
        {routes}
      </div>
    </HashRouter>

  );
}

export default App;
