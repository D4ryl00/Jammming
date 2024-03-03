import React, { useState } from "react";

import SearchBarComponent from "./searchBarComponent";

function SearchBar({ onValidate }) {
  const [input, setInput] = useState("");

  const changeHandler = ({ target }) => {
    setInput(target.value);
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      onValidate(input);
    }
  };

  return (
    <SearchBarComponent
      input={input}
      onChangeInput={changeHandler}
      onKeyDown={keyDownHandler}
    />
  );
}

export default SearchBar;
