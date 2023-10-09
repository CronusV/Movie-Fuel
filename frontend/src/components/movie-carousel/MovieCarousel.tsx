import { Carousel } from "react-bootstrap";
import { Movie } from "../../types/Movie";

type Props = { movies: Movie[] };

export default function MovieCarousel({ movies }: Props) {
  return (
    <Carousel className="carousel" controls={false} indicators={false}>
      {movies.map((movie) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={movie.poster_path}
              alt={movie.title}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}