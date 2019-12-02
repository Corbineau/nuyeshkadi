// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const Yesh = new Schema(
  {
    word: {
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
      },
    },
    orthography: String
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Yesh", Yesh);