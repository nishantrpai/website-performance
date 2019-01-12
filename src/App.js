import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Container from './withlazyloading'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/1" render={() => <Container start={1} end={250} />} />
            <Route exact path="/2" render={() => <Container start={251} end={500} />} />
            <Route exact path="/3" render={() => <Container start={501} end={750} />} />
            <Route exact path="/4" render={() => <Container start={751} end={1000} />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
