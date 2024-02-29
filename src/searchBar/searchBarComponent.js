import React from "react";

function SearchBarComponent({ input, onChangeInput, onKeyDown }) {
  return (
    <>
      <input
        id="searchInput"
        className="searchInput"
        type="text"
        placeholder="Search"
        value={input}
        onChange={onChangeInput}
        onKeyDown={onKeyDown}
      />
    </>
  );
}

export default SearchBarComponent;
