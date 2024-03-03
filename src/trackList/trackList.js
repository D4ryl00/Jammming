import React from "react";

import TrackListComponent from "./trackListComponent";

function TrackList({ tracks, addHandler }) {
  if (tracks.length === 0) {
    return "no results";
  }

  return <TrackListComponent tracks={tracks} onAdd={addHandler} />;
}

export default TrackList;
