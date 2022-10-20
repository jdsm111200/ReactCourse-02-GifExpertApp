import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./GifCard";

export const GifGrid = ({ searchValue }) => {
  const { gifs, isLoading } = useFetchGifs(searchValue);

  return (
    <>
      <h3>{searchValue}</h3>
      {isLoading && <h4>Loading...</h4>}
      <div className="card-grid">
        {gifs.map((image) => (
          <GifCard
            key={image.id}
            //sirve para esparcir las propiedades de image sin necesidad de colocarlas explicitamente
            {...image}
          />
        ))}
      </div>
    </>
  );
};
