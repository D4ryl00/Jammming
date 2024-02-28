import React from "react";

function SearchBarComponent({ input, setInput }) {
  return (
    <>
      <input
        id="searchInput"
        className="searchInput"
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}

export default SearchBarComponent;
