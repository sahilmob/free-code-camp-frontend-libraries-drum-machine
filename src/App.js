import React, { Component } from 'react';
import './App.css';

import DrumMachine from './components/DrumMachine'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DrumMachine>
        </DrumMachine>
      </div>
    );
  }
}

export default App;
