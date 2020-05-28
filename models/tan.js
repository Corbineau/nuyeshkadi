
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This is the schema for the word of the day. 
const TanSchema = new Schema(
  {
    // Date should be unique, and mm-dd-yyyy format, as it will also serve as the ID.
    date: Date,
    
    word: String, //word string pulled from Yesh model; used for searching Yesh for the proper data.
    yeshId: String, //id of the word, used to update the model only if something changes.
    rendering: String
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Tan", TanSchema);