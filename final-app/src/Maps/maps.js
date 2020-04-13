import React, { PureComponent, Component } from 'react';
import Iframe from 'react-iframe'

class Maps extends React.Component {
  render() {
    return (
      <div className="map-component">
      <Iframe url="https://ridecommand.polaris.com/en-us/map"
        width="100%"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </div>

        )
  }
}

export default Maps;