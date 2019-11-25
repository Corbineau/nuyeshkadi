const db = require("../models")

module.exports = {
    findToday: function(req, res) {
      console.log("searching for today...");
      db.Tan
        .find({})
        .sort({ word: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByDate: function(req, res) {
      db.Tan
      //update like, all of this. It's a whole thing.
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        //this is the one that should run on a schedule.
      db.Tan
        .insertOne(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Tan
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    //do I need this one?
    // remove: function(req, res) {
    //   db.Tan
    //     .findById({ _id: req.params.id })
    //     .then(dbModel => dbModel.remove())
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }
  };