const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genreId: {
    type: String
  },
  dailyRentalRate: {
    type: Number,
    required: true
  },
  numberInStock: {
    type: Number,
    required: true
  }
});

module.exports = Movie = mongoose.model("Movies", movieSchema);
