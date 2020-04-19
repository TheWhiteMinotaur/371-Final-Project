import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



class Conditions extends React.Component {

    render() {
        return (
            <div className="home">
                <h8><u>Welcome to Michigan Trails!</u></h8>
                <div className="description">
                    <ul>
                        This project I had created to help snowmobilers and off-roaders of Michigan be able to plan their trips. It contains the ability to see weather in all
                        major cities the trails lead through. This allows for a user to track weather patterns, so they know where they are heading will be enjoyable. Next, we have
                        trail conditions. For the first release, static HTML was used to update trail conditions. Over the next releases, the option for users to edit conditions themselves
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

