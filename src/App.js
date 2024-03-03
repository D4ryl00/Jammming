import React, { useState } from "react";

import "./App.css";
import SearchBarContainer from "./searchBar/searchBarContainer";
import spotify from "./spotifyMock";
import TrackListContainer from "./trackList/trackListContainer";
import PlaylistContainer from "./playlist/playlistContainer";

function App() {
  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const validateHandler = (searchInput) => {
    try {
      const data = spotify.search(searchInput);
      const tracks = spotify.extractTracks(data);
      setTracks(tracks);
    } catch (error) {
      console.error(error);
    }
  };

  const addHandler = (track) => {
    setPlaylist((playlist) => [...playlist, track]);
  };

  return (
    <div className="App">
      <SearchBarContainer onValidate={validateHandler} />
      <TrackListContainer tracks={tracks} addHandler={addHandler} />
      <PlaylistContainer playlist={playlist} />
    </div>
  );
}

export default App;
