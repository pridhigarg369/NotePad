const { Notes } = require("../models/notes_db");
const jwt = require("jsonwebtoken");
const Key = "jwefwekvnwiegvwiuebfwjkdnwk";

const NewNote = async (req, res) => {
  const { title, note } = req.body;
  if (!note || !title) {
    return res.json({
      status: "error",
      msg: "Incomplete Data: Please provide Note With Title",
    });
  }
  var existing = await Notes.findOne({ title: title });
  if (existing) {
    return res.json({
      status: "error",
      msg: "A Note with this Title already exixts",
    });
  }
  var newNote = await Notes.create(req.body);
  return res.json({ status: "Sucessful", msg: "Note Added", Note: newNote });
};
const allNotes = async (req, res) => {
  const title = req.body;
  var notes = await Notes.find(title);
  return res.json({ msg: "All your notes", notes: notes });
};
const deleteNote = async (req, res) => {
  console.log("a");
  console.log(req.body.id);
  const { _i } = req.body;
  console.log(_i);
  console.log("b");
  var user = await Notes.findById(_i);
  console.log("c");
  if (user) {
    var del = await Notes.findByIdAndDelete(_i);
    return res.json({ msg: user });
  } else {
    console.log("haadh he hogi yr");
  }
};
module.exports = {
  NewNote,
  allNotes,
  deleteNote,
};
