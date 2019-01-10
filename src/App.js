import React, { Component } from 'react';
import WithLazyLoading from './withlazyloading'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WithLazyLoading />
        </header>
      </div>
    );
  }
}

export default App;
