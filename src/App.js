import React, { Component } from 'react';
import './App.css';

import DrumMachine from './components/DrumMachine'
import DrumPad from './components/Pad'

class App extends Component {

  handleKeyDown = (e) => {
    let keysArr = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c']
    let key = null
    if (keysArr.includes(e.key)) {
      key = document.getElementsByName(e.key)
    } else {
      return
    }
    if (key[0]) {
      let display = document.getElementById("display")
      display.innerText = e.key
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
        <div id="display">Press key to play audio</div>
        <DrumMachine>
          <DrumPad button="q" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" clicked={this.clickHandler} desc="Heater-1" />
          <DrumPad button="w" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" clicked={this.clickHandler} desc="Heater-2" />
          <DrumPad button="e" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" clicked={this.clickHandler} desc="Heater-3" />
          <DrumPad button="a" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" clicked={this.clickHandler} desc="Heater-4" />
          <DrumPad button="s" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" clicked={this.clickHandler} desc="Clap" />
          <DrumPad button="d" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" clicked={this.clickHandler} desc="Open-HH" />
          <DrumPad button="z" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" clicked={this.clickHandler} desc="Kick-n'-Hat" />
          <DrumPad button="x" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" clicked={this.clickHandler} desc="Kick" />
          <DrumPad button="c" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" clicked={this.clickHandler} desc="Closed-HH" />
        </DrumMachine>
      </div>
    );
  }
}

export default App;
