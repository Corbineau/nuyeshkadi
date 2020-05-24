
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data structure for the words themselves
const Yesh = new Schema(
  {
    word: String,
    definitions: [
      {
      key: Number,
      partOfSpeech: Array,
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
    orthography: String,
    notes: String
  }
);

// export the new Schema so we can modify it using Node.js
module.exports = mongoose.model("Yesh", Yesh);