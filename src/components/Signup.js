import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../logo.svg'
import '../App.css';
import * as firebase from 'firebase';


class Signup extends Component {
    constructor() {
        super()

        this.LetsSignup = this.LetsSignup.bind(this);
    }
    

    LetsSignup() {
        const email = this.refs.email.value;
        const pass = this.refs.pass.value;
        const auth = firebase.auth();

        auth.createUserWithEmailAndPassword(email, pass).then((user) => {
            let child = firebase.database().ref().child("userIdAndPass");
            child.push({ email: email, password: pass });

            alert("Signup Done");



        }

        );
    }


    render() {
        return (
            <div className="App">

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Signup Page</h2>

                </div>
                <div id="form" >
                    <label htmlFor="email">Email </label><br />
                    <input type="email" className="form-control" placeholder="Email" ref="email" /><br /><br />
                    <label htmlFor="pass" >Password </label><br />
                    <input type="password" className="form-control" ref="pass" />
                    <br />
                    <button onClick={this.LetsSignup} className="btn btn-primary">Signup</button>
                    <Link to="/"><button className="btn btn-secondary" >Home</button></Link>
                </div>
            </div>
        );
    }
}

export default Signup;
