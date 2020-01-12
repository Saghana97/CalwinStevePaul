import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Customer from './Components/Customer';

function App() {
  return (
 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Customer Details
        </p>
      </header>
      <Customer/>
    </div>
  );
}

export default App;
