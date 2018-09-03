import React, { Component } from 'react';
import './App.css';

import DrumMachine from './components/DrumMachine'
import Pad from './components/Pad'

class App extends Component {

  handleKeyDown = (e) => {
    let key = document.getElementsByName(e.key)
    key[0].play()
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
          <Pad button="w" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
        </DrumMachine>
      </div>
    );
  }
}

export default App;
