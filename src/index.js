import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Signup from './components/Signup';
import Login from './components/Login';

import { Router, Route, browserHistory } from 'react-router';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDcbTO7UheOR-IAcnmCMKFTt4aQ1tsTIzE",
  authDomain: "blog-2e009.firebaseapp.com",
  databaseURL: "https://blog-2e009.firebaseio.com",
  projectId: "blog-2e009",
  storageBucket: "blog-2e009.appspot.com",
  messagingSenderId: "956565054974"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={App} />
    <Route path="/Signup" component={Signup} />
    <Route path="/Login" component={Login} />
  </Router>
  ,
  document.getElementById('root')
);
