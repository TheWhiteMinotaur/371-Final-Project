import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



class Conditions extends React.Component {

    render() {
        return (
            <div className="home">
                <h8><u>Welcome Home!</u></h8>
                <div className="description">
                    <ul>
                        This is a project I created to help snowmobilers and off-roaders of Michigan, be able to plan their trips. It contains the ability to see weather in all
                        major cities the trails lead through. This allows for an user to track weather patters, and see if where they are heading will be enjoyable. Next, we have
                        trail conditions. For the first release, static HTML was used to update trail conditions. Over next releases, the option for users to edit conditions themselves
                        will be a feature as long as they have an account with the website.
                    </ul>
                    <div>
                        
                        <Link to="/sign-up"  className="btn btn-info btn-block"><b>Create an account</b></Link>

                        <Link to="/login"  className="btn btn-info btn-block"><b>Sign in</b></Link>


                    </div>
                </div>

            </div>

        );
    }
}

export default Conditions;

