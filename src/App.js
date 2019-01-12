import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Container from './withlazyloading'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path="/1" render={() => <Container start={0} end={500} />} />
          <Route exact path="/2" render={() => <Container start={501} end={1000} />} />
        </header>
      </div>
    );
  }
}

export default App;
