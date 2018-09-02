import React from 'react'

export default (props) => {
    return (
        <div className="drum-pad">
            <p>{props.button}</p>
            <audio src="" className="clip"></audio>
        </div>
    )
}
