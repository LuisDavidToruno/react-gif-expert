import { useFetchGifs } from "../hooks/useFetchGifs";
import { Gifitem } from "./Gifitem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <Gifitem key={image.id} title={image.title} url={image.url} />
        ))}
      </div>
    </>
  );
};
