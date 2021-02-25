import React from 'react'

export default function Song({currentSong}) {
  return (
    <div className="song">
      <img src={currentSong.cover} alt=""></img>
      <h3>{currentSong.name}</h3>
      <h4>{currentSong.artist}</h4>
    </div>
  )
}
