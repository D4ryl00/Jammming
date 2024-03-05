import React from "react";

import Track from "../track/track";

function PlaylistComponent({ playlist, onRemove, title, onChangeTitle }) {
  const handleTitleChange = (event) => {
    onChangeTitle(event.target.value);
  };

  return (
    <div className="playlist">
      <input onChange={handleTitleChange} defaultValue={title} />
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
