import React from "react";

import TrackListComponent from "./trackListComponent";

function TrackListContainer({ tracks, addHandler }) {
  if (tracks.length === 0) {
    return "no results";
  }

  const clickHandler = (track) => {
    addHandler(track);
  };

  console.log("remi: JsonTracks:" + tracks);
  return <TrackListComponent tracks={tracks} onClick={clickHandler} />;
}

export default TrackListContainer;
