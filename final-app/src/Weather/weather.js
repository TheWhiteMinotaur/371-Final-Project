import React, {Component } from 'react';
import Iframe from 'react-iframe'

class Weather extends Component {
  render() {
    return (
      <div className="weather-component">
      <Iframe src="weather.html"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="auto"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </div>

        )
  }
}

export default Weather;