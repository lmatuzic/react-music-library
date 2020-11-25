import React from 'react'

export default function Player() {
  return (
    <div className="player">
      <h1>Music player</h1>
      <div className="time-control">Player controller
        <span>start</span>
        <input type="text"/> 
        <span>end</span>
      </div>

      <div className="play-control"></div>
    </div>
  )
}
