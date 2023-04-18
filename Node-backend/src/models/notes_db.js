var mongoose = require("mongoose");
var uuid = require("uuid");
var cryptoJs = require("crypto-js");

const NotesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  CreatedOn: {
    type: Date,
    default: Date.now(),
  },
});

const Notes = new mongoose.model("Notes", NotesSchema);

module.exports = { Notes };
