const express = require('express');
const path = require('path');
const PORT = 3001;
const id = Math.floor((1 + Math.random()) * 0x10000)
.toString(16)
.substring(1);
console.log(id)
const app = express();  

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('./api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('./api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})