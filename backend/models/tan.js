
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This is the schema for the word of the day. 
const TanSchema = new Schema(
  {
    // Date should be unique, and mm/dd/yyyy format.
    date: Date,
    //word object pulled from Yesh model
    word: Object,
    //this may not actually be necessary; it is based on the orthography
    rendering: String
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Tan", TanSchema);