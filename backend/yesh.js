// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const YeshSchema = new Schema(
  {
    word: String,
    pronounciation: String,
    partOfSpeech: String,
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
    orthography: String
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Yesh", YeshSchema);