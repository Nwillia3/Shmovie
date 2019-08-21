const express = require("express");
const Movie = require("../../model/Movies");
const router = express();

// @route   GET api/movies
// @desc    retrieve all movies
// @access  public
router.get("/", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.json({ allMovies });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/movies
// @desc    retrieve all movies
// @access  public

router.post("/", async (req, res) => {
  try {
    const newMovie = new Movie({
      title: req.body.title,
      genreId: req.body.genreId,
      numberInStock: req.body.numberInStock,
      dailyRentalRate: req.body.dailyRentalRate
    });

    const movie = await newMovie.save();

    res.json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// @route   GET api/movies/:id
// @desc    retrieve movies by id
// @access  public

router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ msg: "movie does not exist" });
    res.json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// @route   DELETE api/movies/:id
// @desc    delete movie by id
// @access  public
router.delete("/:id", async (req, res) => {
  try {
    const movie = await Movie.findOneAndDelete({ _id: req.params.id });

    if (!movie) return res.status(404).json({ msg: "Movie not found" });

    await movie.remove();

    res.json({ msg: "Movie deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
});

module.exports = router;
