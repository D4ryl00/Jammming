import React from "react";

function TrackListComponent({ tracks }) {
  return (
    <div>
      <h1>Track List</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            {track.title}
            {track.artist}
            {track.album}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrackListComponent;
