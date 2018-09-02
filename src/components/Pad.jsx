import React, { Component } from 'react'
import "./Pad.css"

export default class Pad extends Component {
    handleClick = (event) => {
        console.log(event.target);
    }
    render() {
        return (
            <div className="drum-pad" onClick={this.handleClick}>
                <p>{this.props.button}</p>
                <audio src="" className="clip"></audio>
            </div>
        )
    }
}
