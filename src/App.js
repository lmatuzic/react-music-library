import Song from './components/Song';
import Player from './components/Player';
import './stylesheet/app.scss'

function App() {
  return (
    <div className="App">
      <h1>React music library</h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;
