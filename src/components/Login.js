import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router';
import * as firebase from 'firebase';

class Login extends Component {
    constructor() {
        super()

        this.loginNow = this.loginNow.bind(this);
    }

    loginNow() {
        const email = this.refs.email.value;
        const pass = this.refs.pass.value;
        const auth = firebase.auth();
        // const Err = firebase.auth.Error();
        auth.signInWithEmailAndPassword(email, pass).then(() => {
           console.log("signed in");
                   
               
            
        });
    }

    render() {
        return (
            <div className="App">

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Login Page</h2>

                </div>
                <div id="form">
                    <label htmlFor="Email">Email</label> <br />
                    <input type="emai" ref="email" className="form-control" />
                    <br />
                    <label htmlFor="pass">Password</label>
                    <br />
                    <input type="password" ref="pass" className="form-control" />
                    <br />
                    <button onClick={this.loginNow} className="btn btn-primary">Login</button>
                                        <Link to="/"><button className="btn btn-secondary" >Home</button></Link>

                </div>
            </div>
        );
    }
}

export default Login;
