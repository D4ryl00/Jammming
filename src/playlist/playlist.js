import React from "react";

import PlaylistComponent from "./playlistComponent";

function Playlist({ playlist, removeHandler, title, onTitleChange }) {
  return (
    <PlaylistComponent
      playlist={playlist}
      onRemove={removeHandler}
      title={title}
      onChangeTitle={onTitleChange}
    />
  );
}

export default Playlist;
