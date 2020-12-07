import React from 'react'
import LibrarySong from './LibrarySong'

export default function Library({songs, currentSong, setCurrentSong, setSongs, libraryStatus}) {
  return (
    <div className={`library ${libraryStatus ? 'active' : ''}`}>
      <h2>Library</h2>
      <div className="library-song__list">
        {songs.map(song => (
          <LibrarySong 
          currentSong={currentSong}
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
