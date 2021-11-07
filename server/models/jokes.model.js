//bring in mongoose
const mongoose = require("mongoose");

// make the model
const JokeSchema = new mongoose.Schema({
    name: String,
    Joke: String
});

// final setup
const Joke = mongoose.model("Joke", JokeSchema);

// need to export this model to use it in our project
module.exports = Joke;
