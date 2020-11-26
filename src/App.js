import {useState} from 'react'
import Song from './components/Song';
import Player from './components/Player';
import songData from './songData';
import './stylesheet/app.scss'

function App() {
  const [songs, setSongs] = useState(songData());
  const [currentSong, setCurrentSong] = useState(songs[3]);

  return (
    <div className="App">
      <Song 
        currentSong={currentSong}
      />
      <Player />
    </div>
  );
}

export default App;
