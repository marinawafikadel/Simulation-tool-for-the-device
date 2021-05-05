import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase'
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
      userid:''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      console.log(u)}).catch((error) => {
       // console.log(error);
      alert("Wrong Password or Email");
      });
  }

  signup(e){
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{alert("Signed up successfully")})
    .catch((error) => {
        //console.log(error);
        alert("Try again to sign up");
      })
  }
  render() {
    
    return (
       <div className="col-md-6">
       <form>
      <div class="form-group">
       <label style={{ font:" 18px bold Arial sans-serif"}} for="exampleInputEmail1">Email address</label>
       <input style={{marginLeft: '20px'}}value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" class="form-text text-muted"></small>
      </div>
       <div class="form-group">
      <label style={{ font:" 18px bold Arial sans-serif"}} for="exampleInputPassword1">Password</label>
      <input style={{marginLeft: '50px'}}value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" style={{ width: "65px", marginLeft: "160px",marginTop:"70px", height: "40px" }} onClick={this.login} class="btn btn-primary">Login</button>
      <button onClick={this.signup} style={{width: "65px", height: "40px",marginLeft: '30px'}} className="btn btn-success">Signup</button>
 </form>
 
 </div>
    );
  }
}
export default Login;