import React from 'react'

export default function LibrarySong({song, setCurrentSong}) {
  const selectSong = () => {setCurrentSong(song)}

  return (
    <div onClick={selectSong} className="library-song">
      <img src={song.cover} alt=""></img>
      <div>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}
