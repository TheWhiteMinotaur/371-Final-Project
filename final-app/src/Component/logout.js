import React, { Component } from "react";
import fire from "../config/Fire";
import { Link, useHistory } from "react-router-dom";




export default class Loout extends Component {
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
            <div className="auth-logout">
            <form>
                <h3>Logout</h3>


                <h6>Thank you for stopping by!</h6>
                <Link to="/home">
                <button onClick={this.logout} type="submit" className="btn btn-info btn-block">Logout </button>
                </Link>
               
            </form>
            </div>
        );
    }
}