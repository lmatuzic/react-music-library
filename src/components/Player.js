import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function Player() {
  return (
    <div className="player">
      <h1>Music player</h1>
      <div className="time-control">Player controller
        <span>start</span>
        <input type="range"/> 
        <span>end</span>
      </div>

      <div className="play-control">
        <FontAwesomeIcon className="icon icon-previous" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon className="icon icon-play" size="2x" icon={faPlay} />
        <FontAwesomeIcon className="icon icon-next" size="2x" icon={faAngleRight} />
      </div>
    </div>
  )
}
