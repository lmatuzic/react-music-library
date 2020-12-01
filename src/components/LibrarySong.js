import React from 'react'

export default function LibrarySong({song, setCurrentSong, songs, setSongs}) {
  const selectSong = () => {setCurrentSong(song)};
  const updatedSongs = () => {
    setSongs(
      songs.map(targetSong => {
        return {
          ...targetSong, 
          active: targetSong.id === song.id
        }
      })
    );
  };

  return (
    <div onClick={() => {
        selectSong();
        updatedSongs();
      }}
      className={`library-song ${song.active ? 'selected' : " "}`}
    >
      <img src={song.cover} alt=""></img>
      <div>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}
