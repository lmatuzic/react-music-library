import {useState} from 'react'
import songData from './songData'
import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'
import Toggle from './components/Toggle'
import './stylesheet/app.scss'

function App() {
  const [songs, setSongs] = useState(songData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Library 
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />

      <Song 
        currentSong={currentSong}
      />

      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
       />

      <Toggle />
    </div>
  );
}

export default App;
