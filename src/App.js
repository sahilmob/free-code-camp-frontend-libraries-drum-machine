import React, { Component } from 'react';
import './App.css';

import DrumMachine from './components/DrumMachine'
import Pad from './components/Pad'

class App extends Component {

  handleKeyDown = (e) => {
    console.log(e.key)
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }
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
