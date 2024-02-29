import React, { useState } from "react";

import "./App.css";
import SearchBarContainer from "./searchBar/searchBarContainer";
import spotify from "./spotifyMock";
import TrackListContainer from "./trackList/trackListContainer";

function App() {
  const [jsonResults, setJsonResults] = useState("");

  const validateHandler = (searchInput) => {
    try {
      const data = spotify.search(searchInput);
      const tracks = spotify.extractTracks(data);
      setJsonResults(tracks);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <SearchBarContainer onValidate={validateHandler} />
      <TrackListContainer jsonResults={jsonResults} />
    </div>
  );
}

export default App;
