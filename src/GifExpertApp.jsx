import { useState } from "react";
//va a leer el index.js de components esto se hace para no tener 2 imports diferentes que apuntan al mismo directorio
import { GifGrid, SearchGif } from "./components";

export default function GifExpertApp() {
  const [search, setSearch] = useState([]);

  const onAddSearch = (searchValue) => {
    if (search.find((item) => item.toLowerCase() === searchValue.toLowerCase()))
      return;
    setSearch([searchValue, ...search]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <SearchGif onSearch={onAddSearch} />

      {search.map((item) => (
        <GifGrid searchValue={item} key={item} />
      ))}
    </>
  );
}
