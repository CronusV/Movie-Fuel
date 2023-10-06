const router = require("express").Router();
const movieService = require("../../../services/movieService");

router.get("/now_playing", movieService.getNowPlayingMovies);

module.exports = router;