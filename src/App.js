import React, { Component } from 'react';
import Container from './withlazyloading'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container />
        </header>
      </div>
    );
  }
}

export default App;
