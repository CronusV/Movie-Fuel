import { Movie } from "../types/Movie";
import MovieCarousel from "../components/MovieCarousel";
import { Container } from "react-bootstrap";

type Props = {
  movies: Movie[]
}

const HomePage = ({movies}: Props) => {
  return (
    <Container className="hero">
      <h1 className="">Now Playing</h1>
      <MovieCarousel movies={movies} />
    </Container>
  );
};

export default HomePage;
