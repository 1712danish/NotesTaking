const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Note } = require("./models/notes.model");

mongoose.connect("mongodb://localhost:27017/notesApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const note = await Note.find();
  res.send(note);
});

app.delete("/delete/:id", async (req, res) => {
  const deletedNote = await Note.findByIdAndDelete(req.params.id);
  console.log(deletedNote)
  res.send(deletedNote);
});

app.get("/note/:id", async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.send(note);
});

app.post("/", async (req, res) => {
  const response = await Note.create(req.body);
  res.send(response);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
