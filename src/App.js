import React, { Component } from 'react';
import './App.css';

import DrumMachine from './components/DrumMachine'
import Pad from './components/Pad'

class App extends Component {

  handleKeyDown = (e) => {
    let key = document.getElementsByName(e.key.toLowerCase())
    if (key[0]) {
      key[0].play()
    }
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
          <Pad button="q" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" clicked={this.clickHandler} />
          <Pad button="w" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" clicked={this.clickHandler} />
          <Pad button="e" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" clicked={this.clickHandler} />
          <Pad button="a" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" clicked={this.clickHandler} />
          <Pad button="s" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" clicked={this.clickHandler} />
          <Pad button="d" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" clicked={this.clickHandler} />
          <Pad button="z" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" clicked={this.clickHandler} />
          <Pad button="x" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" clicked={this.clickHandler} />
          <Pad button="c" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" clicked={this.clickHandler} />
        </DrumMachine>
      </div>
    );
  }
}

export default App;
