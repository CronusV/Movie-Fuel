import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// Types
import { Movie } from "./types/Movie";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    const results = await fetch("http://localhost:3000/api/movies/now_playing");
    const movieData = await results.json();
    setMovies(movieData);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
