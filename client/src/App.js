import React, { Component } from 'react';
import './App.css';
import Router from './Router';
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
import TheHead from './components/TheHead/TheHead';
import TheFoot from './components/TheFoot/TheFoot';
require('typeface-tangerine');


class App extends Component {
  render() {


    return (
      <ThemeProvider theme={theme}>{
        <div>
          <TheHead />
          <div className="wrapper">
            <div id="swap">
              <Router />
            </div>
          </div>
          <footer id="the-foot">
            <TheFoot />
          </footer>
        </div>
      }</ThemeProvider>
    );

  }


}

export default App;
