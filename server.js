const express = require('express');
const path = require('path');
const PORT = 3001;
const id = Math.floor((1 + Math.random()) * 0x10000)
.toString(16)
.substring(1);
console.log(id)

const app = express();  

app.get('./api/notes', (req, res) => {
    
})