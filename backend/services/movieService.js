const baseURL = "https://api.themoviedb.org/3/movie";
const imagePath = "https://image.tmdb.org/t/p/original";
const tmdbHeaders = {
  accept: "application/json",
  Authorization: process.env.TMDB_KEY,
};

const getNowPlayingMovies = async (req, res) => {
  const path = "/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: tmdbHeaders,
  };

  try {
    const response = await fetch(baseURL + path, options);
    const json = await response.json();
    const movies = json.results.map((result) => {
      result.backdrop_path = imagePath + result.backdrop_path;
      result.poster_path = imagePath + result.poster_path;
      return result;
    });
    return res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  getNowPlayingMovies,
};
