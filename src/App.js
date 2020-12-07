import {useState} from 'react'
import songData from './songData'
import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'
import LibraryToggle from './components/LibraryToggle'
import './stylesheet/app.scss'

function App() {
  const [songs, setSongs] = useState(songData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className="App">
      <Library 
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />

      <Song 
        currentSong={currentSong}
      />

      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
       />

      <LibraryToggle 
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
    </div>
  );
}

export default App;
