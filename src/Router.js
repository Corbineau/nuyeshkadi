import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Wod from './components/Wod/Wod';
import Admin from './components/Admin/Admin';
import Min from './components/Min';


class Router extends Component {
    render() {
      const Router = () => (
        <div>
          <Switch>
            <Route exact path='/' component={Wod}/>
            <Route path='/index' component={Wod}/>
            <Route path='/admin' component={Admin}/>
            <Route path='*' component={Min}/>
          </Switch>
        </div>
      )
      return (
        <Switch>
          <Router/>
        </Switch>
      );
    }
  }
  
  export default Router;