import React, { Component } from 'react';
import './App.css';

import DrumMachine from './components/DrumMachine'
import Pad from './components/Pad'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DrumMachine>
          <Pad button="W" />
        </DrumMachine>
      </div>
    );
  }
}

export default App;
