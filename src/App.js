import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'
import "firebase/auth";
import firebaseConfig from './firebase-config'
import Record from './Record';
import Login from './Login';

firebase.initializeApp(firebaseConfig);
export default class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    var user={id:""}
    return (
     <div>{this.state.user?( <Record id={this.state.user.uid}/>): (<Login />)}
     </div>
    )
}
}
