const fs = require("fs");
const notes = require("./db/db.json");
console.log(notes);
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const uuid = require("uuid");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  const noteId = uuid.v4();
  newNote.id = noteId;
  notes.push(newNote);
  fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
    err ? console.log(err) : res.send(newNote);
  });
});


app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => console.log("listening at http://localhost:${PORT}"));
