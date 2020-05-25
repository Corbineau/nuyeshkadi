const db = require("../models")

module.exports = {
  //also may not need this one, since I am sending by date, unless I actually edit to find by today's date, or by the most recent date. Seems much to me. 
    findAll: function(req, res) {
      console.log("searching for words of the day...");
      db.Tan
        .find({})
        .sort({ date: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByDate: function(req, res) {
      console.log("searching for the date...");
      db.Tan
        .find({
          date: req.params.date})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    createTan: function(req, res) {
      console.log("adding word of the day...");
        //this is the one that should run on a schedule.
      db.Tan
        .insertOne(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    updateTan: function(req, res) {
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