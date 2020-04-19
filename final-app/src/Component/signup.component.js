import React, { Component } from "react";
import fire from "../config/Fire";



export default class SignUp extends Component {

    constructor(props){
        super(props);
        this.login=this.login.bind(this);
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


    render() {
        return (
            <div className="auth-signup">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input value ={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input value ={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" placeholder="Enter password" />
                </div>

                <button onClick={this.signup} type="submit" className="btn btn-info btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div>
        );
    }
}