const express = require("express");
const { NewNote, allNotes, deleteNote } = require("./controllers/controllers");

const noteRouter = express.Router();

noteRouter.route("/Note").post(NewNote).get(allNotes).delete(deleteNote);

module.exports = noteRouter;
