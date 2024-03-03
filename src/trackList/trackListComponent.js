import React from "react";

import Track from "../track/track";

function TrackListComponent({ tracks, onAdd }) {
  return (
    <div className="tracklist">
      <h1>Results</h1>
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          toAdd={true}
          onAdd={onAdd}
          onRemove={() => {}}
        />
      ))}
    </div>
  );
}

export default TrackListComponent;
