import React, { Component } from 'react';
import Index from './components/index/index';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Index} />
      </Router>
    );
  }
}

export default App;
