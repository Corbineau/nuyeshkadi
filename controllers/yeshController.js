const db = require("../models")

// Defining methods for the Controller
module.exports = {
    findAll: function(req, res) {
      console.log("searching for all words...");
      db.Yesh
        .find({})
        .sort({ word: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Yesh
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getRandomWord: function(req, res) {
      console.log("searching for a random word...")
      db.Yesh
      .aggregate(
        [{$sample: {size: 1} }]
        )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
    findByWord: function(req, res) {
      db.Yesh
      .find({word: req.params.word})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
    createWord: function(req, res) {
      db.Yesh
        .insertOne(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    updateWord: function(req, res) {
      db.Yesh
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    removeWord: function(req, res) {
      db.Yesh
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };