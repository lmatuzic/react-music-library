import {useState} from 'react'
import Song from './components/Song'
import Player from './components/Player'
import songData from './songData'
import Library from './components/Library'
import './stylesheet/app.scss'

function App() {
  const [songs, setSongs] = useState(songData());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Library 
        songs={songs}
      />

      <Song 
        currentSong={currentSong}
      />

      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
       />
    </div>
  );
}

export default App;
