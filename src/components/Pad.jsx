import React, { Component } from 'react'
import "./Pad.css"

export default class Pad extends Component {
    render() {
        return (
            <div className="drum-pad" >
                <input type="button" value={this.props.button} />
                <audio src={this.props.audioSrc} className="clip" name={this.props.button}></audio>
            </div>
        )
    }
}
