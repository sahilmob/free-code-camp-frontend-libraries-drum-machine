import React, { Component } from 'react'
import "./Pad.css"

export default class Pad extends Component {
    clickHandler = (e) => {
        let key = document.getElementsByName(e.target.value.toLowerCase())
        if (key[0]) {
            key[0].play()
        }
    }

    render() {
        return (
            <div className="drum-pad" >
                <input type="button" value={this.props.button} onClick={this.clickHandler} />
                <audio src={this.props.audioSrc} className="clip" name={this.props.button}></audio>
            </div>
        )
    }
}
