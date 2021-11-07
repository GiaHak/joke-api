// building routes 
const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    // CREATE ROUTE
    app.post("/api/joke/create", JokeController.createJoke);

    // FIND ONE 
    app.get("/api/joke/:_id", JokeController.findOneJoke);

    // FIND ALL
    app.get("/api/joke", JokeController.findAllJoke);

    // UPDATE 
    app.put("/api/joke/update/:_id", JokeController.updateJoke);

    // DELETE
    app.delete("/api/joke/delete/:_id", JokeController.deleteJoke);
}