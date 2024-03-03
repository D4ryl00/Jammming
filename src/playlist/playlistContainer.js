import React from "react";

import PlaylistComponent from "./playlistComponent";

function PlaylistContainer({ playlist }) {
  return <PlaylistComponent playlist={playlist} />;
}

export default PlaylistContainer;
