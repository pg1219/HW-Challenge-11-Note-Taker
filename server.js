const fs = require("fs");
const notes = require("./db/db.json");
console.log(notes);
const express = require("express");
const path = require("path");
const PORT = 3001;
const id = Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);
console.log(id);
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("./api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
});

app.post("/api/notes", (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      note_id: id,
    };
    const response = {
        status: 'success',
        body: newNote
    }
    console.log(response)
    res.status(201).json(response)
  }else {
    res.status(500).json('Error in posting review');
  }
});

app.get("./notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./db/public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./db/public/index.html"));
});

app.listen(PORT, () => console.log("listening at http://localhost:${PORT}"));
