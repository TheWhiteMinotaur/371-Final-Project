import React, { PureComponent, Component } from 'react';
import Iframe from 'react-iframe'

class Weather extends Component {
  render() {
      return(

        <div className="App">
            <header className="App-header">
                <p>
                Edit<code>src/weather.html</code> and save to reload
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Learn react
                </a>
            </header>
        </div>
    )
  }
}

export default Weather;