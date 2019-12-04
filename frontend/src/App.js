import React, { Component } from 'react';
import './App.css';
import Router from './Router';
// import { ThemeProvider } from 'theme-ui'
// import theme from './theme'
import TheHead from './components/TheHead/TheHead';
import TheFoot from './components/TheFoot/TheFoot';
require('typeface-tangerine');

// export default props => (
//   <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
// )

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
