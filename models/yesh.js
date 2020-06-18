
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data structure for the words themselves
const Yesh = new Schema(
  {
    Word: String,
    Definitions: [
      {
      Key: Number,
      PartOfSpeech: Array,
      Pronounciation: String,
      Meaning: String,
      Sorters: {
        Categories: Array,
        Qualities: Array,
        Sort: Array
      },
      Etymology: {
        Source: String,
        RelatedWords: Array,
        Roots: Array,
        Morphs: {
            verb: {
              infinitive: String,
              regular: Boolean
            },
            noun: {
              plural: String,
              singular: String,
              regular: Boolean
            },
            adjective: String,
            adverb: String,
          }
      }
    }],
    Orthography: String,
    Notes: String
  }
);

// export the new Schema so we can modify it using Node.js
module.exports = mongoose.model("Yesh", Yesh);