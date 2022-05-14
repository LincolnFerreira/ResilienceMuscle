const express = require ("express");
const router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", (req, res) =>{
    usuarioController.testar(req, res);
});

router.get("/listar", (req, res) =>{
    usuarioController.listar(req, res);
});

router.post("/cadastrar", (req, res) =>{
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar",  (req, res) =>{
    usuarioController.entrar(req,res);
});

module.exports = router;