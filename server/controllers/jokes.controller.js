// we need to use the jokes model 
const Joke = require("../models/jokes.model");

// CRUD commands

// Create function
module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: "error while creating a joke", err: err }))
}

// READ ONE
module.exports.findOneJoke = (req,res) => {
    Joke.find({_id: req.params._id})
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json({message: "error while finding one joke", err: err }))
}

// FIND ALL JOKES
module.exports.findAllJoke = (req,res) => {
    Joke.find(req.body)
        .then(allJoke => res.json(allJoke))
        .catch(err => res.json({message: "error while finding all the jokes", err: err }))
}

// UPDATE JOKES
module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json({message: "error while updating  jokes", err: err }))
}

// DELETE JOKES
module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({_id: req.params._id}, req.body)
        .then(deletedJoke => res.json(deletedJoke))
        .catch(err => res.json({message: "error while deleting a jokes", err: err }))
}