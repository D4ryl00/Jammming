import React from "react";

import TrackListComponent from "./trackListComponent";

function TrackListContainer({ jsonResults }) {
  if (jsonResults === "") {
    return "no results";
  }

  console.log("remi: JsonTracks:" + jsonResults);
  const results = JSON.parse(jsonResults);
  console.log("remi: tracks:" + JSON.stringify(results.tracks));
  return <TrackListComponent tracks={results.tracks} />;
}

export default TrackListContainer;
