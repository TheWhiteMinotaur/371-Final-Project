import React, { Component } from "react";


export default class Home extends Component {    
    render() {
        return (
            <div>
                <h3>Polaris Ride Command</h3>

                <div className="NewGroup">
                    <label>You can find off-road or snow maps here </label>
                         <p>
                            {/* <a className="btn btn-primary btn-block" href="https://ridecommand.polaris.com/en-us/map">Use this link for maps</a> */}
                            <div id="button"><a href="Embed.html">Log In</a></div>
                        </p>
                    
                </div>

            </div>
        );      
    }
}