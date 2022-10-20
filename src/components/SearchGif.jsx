import React, { useState } from "react";

export function SearchGif({ onSearch }) {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) {
      return;
    }
    setInputValue("");
    onSearch(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search a gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}
