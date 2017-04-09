import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RaisedButton from 'material-ui/RaisedButton';



class App extends Component {
  
  render() {
    const style = {
  margin: 12,
};

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
       
      <div className="App">
 <AppBar title="Blood Bank App">
    <Link to="/Login">
          <RaisedButton label="Login" primary={true}  style={style}/>
        </Link>
        <Link to="/Signup">
              <RaisedButton label="Signup" primary={true} style={style} />
        </Link>
 </AppBar>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Home Page</h2>
        </div>
       

      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
