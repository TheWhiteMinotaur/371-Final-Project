import React, { Component } from "react";
import Iframe from 'react-iframe'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Conditions extends React.Component {

    render() {
        return (
            <div className="conditions">
                <h3>Trail conditions for cities listed below</h3>
                <div className="northwest">
                    <h7>North-West Lower</h7>
                    <li>
                        <a href="../PubConditions/Baldwin.html" onClick={this.handleClick}>
                            Baldwin
            </a>
                    </li>
                    <li>
                        <a href="../PubConditions/Benzonia.html" onClick={this.handleClick}>
                            Benzonia
            </a>
                    </li>
                    <li>
                        <a href="../PubConditions/Cadillac.html" onClick={this.handleClick}>
                            Cadillac
            </a>
                    </li>
                    <li>
                        <a href="../PubConditions/FreeSoil.html" onClick={this.handleClick}>
                            Free Soil
            </a>
                    </li>
                    <li>
                        <a href="../PubConditions/IndianRiver.html" onClick={this.handleClick}>
                            Indian River
            </a>
                    </li>
                    <li>
                        <a href="../PubConditions/Petosky.html" onClick={this.handleClick}>
                            Petosky
            </a>
                    </li>
                    <li>
                        <a href="../PubConditions/TraverseCity.html" onClick={this.handleClick}>
                            Traverse City
            </a>
                    </li>
                </div>
                <div className="eastern">
                    <h7>Eastern U.P.</h7>
                    <li>
                        <a href="../PubConditions/Brimley.html" onClick={this.handleClick}>
                            Brimley
                        </a>
                    </li>
                    <li>
                        <a href="../PubConditions/Drummond.html" onClick={this.handleClick}>
                            Drummond Island
                        </a>
                    </li>
                    <li>
                        <a href="../PubConditions/conditionsNewberry.html" onClick={this.handleClick}>
                            Newberry
            </a>
                    </li>
                    <li>
                        <a href="../PubConditions/Paradise.html" onClick={this.handleClick}>
                            Paradise
            </a>
                    </li>
                </div >

                <div className="central">
                    <h7>Central U.P.</h7>
                    <li>
                        <a href="../PubConditions/AuTrain.html" onClick={this.handleClick}>
                            Au Train
                        </a>
                    </li>
                    <li>
                        <a href="../PubConditions/GrandMarais.html" onClick={this.handleClick}>
                            Grand Marais
                        </a>
                    </li>
                </div >
                <div className="snowmobile"></div>
            </div>

        );
    }
}

export default Conditions;