import React, {useState} from 'react';
import './styles/app.scss';
//add components
import Player from './components/Player';
import Song from './components/Song';
//import data 
import data from './data';

function App() {
  //add state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
