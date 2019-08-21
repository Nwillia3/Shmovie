const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const movies = require("./routes/api/movies");

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Router
app.use("/api/movies", movies);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
