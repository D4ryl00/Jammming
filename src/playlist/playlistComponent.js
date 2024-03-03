import React from "react";

import Track from "../track/track";

function PlaylistComponent({ playlist, onRemove }) {
  return (
    <div className="playlist">
      <h1>Results</h1>
      {playlist.map((track) => (
        <Track
          key={track.id}
          track={track}
          toAdd={false}
          onAdd={() => {}}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default PlaylistComponent;
