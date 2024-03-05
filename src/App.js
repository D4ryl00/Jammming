import React, { useState } from "react";

import "./App.css";
import SearchBar from "./searchBar/searchBar";
import spotify from "./spotifyMock";
import TrackList from "./trackList/trackList";
import Playlist from "./playlist/playlist";

function App() {
  const [title, setTitle] = useState("My playlist");
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
    if (playlist.find((currentTrack) => currentTrack.id === track.id)) {
      return;
    }
    setPlaylist((playlist) => [...playlist, track]);
  };

  const removeHandler = (track) => {
    setPlaylist((playlist) => {
      return playlist.filter((currentTrack) => {
        return currentTrack.id !== track.id;
      });
    });
  };

  return (
    <div className="App">
      <SearchBar onValidate={validateHandler} />
      <TrackList tracks={tracks} addHandler={addHandler} />
      <Playlist
        playlist={playlist}
        removeHandler={removeHandler}
        title={title}
        onTitleChange={setTitle}
      />
    </div>
  );
}

export default App;
