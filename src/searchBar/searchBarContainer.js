import React, { useState } from "react";

import SearchBarComponent from "./searchBarComponent";

function SearchBarContainer() {
  const [input, setInput] = useState("");
  return <SearchBarComponent input={input} setInput={setInput} />;
}

export default SearchBarContainer;
