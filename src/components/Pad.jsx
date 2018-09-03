import React, { Component } from 'react'
import "./Pad.css"

export default class DrumPad extends Component {
    clickHandler = (e) => {
        let display = document.getElementById("display")
        let key = document.getElementsByName(e.target.value.toLowerCase())
        if (key[0]) {
            display.innerHTML = e.target.value
            key[0].play()
        }
    }

    render() {
        return (
            <div className="drum-pad" id={this.props.desc}>
                <button type="button" value={this.props.button} onClick={this.clickHandler} name={this.props.desc}>{this.props.button.toUpperCase()}</button>
                <audio src={this.props.audioSrc} className="clip" name={this.props.button} id={this.props.button.toUpperCase()}></audio>
            </div>
        )
    }
}
