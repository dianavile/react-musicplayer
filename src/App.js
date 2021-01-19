import React from 'react';
//import styles
import './styles/app.scss';
//add components
import Player from './components/Player';
import Song from './components/Song';
//import data 
import data from './data';

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
