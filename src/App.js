import React, { Component } from 'react';
import Index from './components/index/index';
import Business from './components/business/business';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/business' component={Business} />
        </Switch>
      </Router>
    );
  }
}

export default App;
