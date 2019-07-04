import React, { Component } from 'react';
import './App.css';
import Router from './Router';
import TheHead from './components/TheHead/TheHead';
import TheFoot from './components/TheFoot';

class App extends Component {
  render() {


    return (
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
    );

  }

  
}

export default App;
