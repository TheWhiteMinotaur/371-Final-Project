import React, { Component } from "react";


export default class Home extends Component {
    render() {
        return (
            <form>
                <h3>Home</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

            </form>
        );
    }
}