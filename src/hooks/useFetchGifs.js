import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGIFS";
//Los hooks son funciones que regresan algo
export const useFetchGifs = (searchValue) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGIFS = async () => {
    const res = await getGifs(searchValue);
    setGifs(res);
    setIsLoading(false);
  };

  //ejecuta la funcion de getGifs cuando se renderiza el componente por primera vez
  useEffect(() => {
    getGIFS();
  }, []);

  return {
    gifs: gifs,
    isLoading: isLoading,
  };
};
