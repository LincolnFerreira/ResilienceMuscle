const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '/index.html'));
});
