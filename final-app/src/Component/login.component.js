import React, { Component } from "react";
import fire from "../config/Fire";

export default class Login extends Component {
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.logout=this.logout.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.signup=this.signup.bind(this);
        this.state={
            email:'',
            password:''
        }
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) =>{
            console.log(error);
        });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error)=>{
            console.log(error);
        })
    }
    
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    logout(){
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="auth-login">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input value ={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input value ={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" placeholder="Enter password" />                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button onClick={this.login} type="submit" className="btn btn-info btn-block">Log In</button>
                <p className="forgot-password text-right">
                    Forgot <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">password?</a>
                </p>
            </form>
            </div>
        );
    }
}