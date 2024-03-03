import React from "react";

import PlaylistComponent from "./playlistComponent";

function Playlist({ playlist, removeHandler }) {
  return <PlaylistComponent playlist={playlist} onRemove={removeHandler} />;
}

export default Playlist;
