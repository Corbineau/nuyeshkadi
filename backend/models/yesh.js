
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data structure for the words themselves
const Yesh = new Schema(
  {
    word: String,
    meanings: [
      {
      key: Number,
      partOfSpeech: String,
      pronounciation: String,
      meaning: String,
      sorters: {
        category: Array,
        qualities: Array,
        sort: Array
      },
      etymology: {
        source: String,
        relatedWords: Array,
        roots: Array
      }
    }],
    orthography: String
  }
);

// export the new Schema so we can modify it using Node.js
module.exports = mongoose.model("Yesh", Yesh);