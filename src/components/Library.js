import React from 'react'
import LibrarySong from './LibrarySong'

export default function Library({songs, setCurrentSong, setSongs}) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-song__list">
        {songs.map(song => (
          <LibrarySong 
            setCurrentSong={setCurrentSong} 
            song={song} 
            songs={songs}
            key={song.id}
            id={song.id}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  )
}
