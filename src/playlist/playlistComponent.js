import React from "react";

function PlaylistComponent({ playlist }) {
  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {playlist.map((track) => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistComponent;
