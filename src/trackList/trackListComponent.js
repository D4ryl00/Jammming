import React from "react";

function TrackListComponent({ tracks, onClick }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Artist</th>
            <th>Album</th>
          </tr>
          {tracks.map((track) => (
            <tr key={track.id}>
              <td>{track.name}</td>
              <td>{track.artist}</td>
              <td>{track.album}</td>
              <td>
                <button onClick={(e) => onClick(track)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrackListComponent;
