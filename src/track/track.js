import React from "react";

function Track({ track, toAdd, onAdd, onRemove }) {
  return (
    <div className="track">
      <p>
        {track.name} | {track.artist} | {track.album}
        {toAdd ? (
          <button onClick={() => onAdd(track)}>+</button>
        ) : (
          <button onClick={() => onRemove(track)}>-</button>
        )}
      </p>
    </div>
  );
}

export default Track;
