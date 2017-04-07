import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Home Page</h2>
        </div>
        <Link to="/Login">
          <button className="btn btn-outline-success btn-lg">Login</button>
        </Link>
        <Link to="/Signup">
          <button className="btn btn-outline-success btn-lg">Signup</button>
        </Link>

      </div>
    );
  }
}

export default App;
