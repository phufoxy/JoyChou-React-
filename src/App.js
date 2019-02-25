import React, { Component } from 'react';
import Index from './components/index/index';
import Business from './components/business/business';
import User from './components/users/user';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/business' component={Business} />
          <Route path='/users' component={User} />
        </Switch>
      </Router>
    );
  }
}

export default App;
