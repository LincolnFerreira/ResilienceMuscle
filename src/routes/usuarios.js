var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/listarHistorico/:idUsuario", function (req, res) {
    idUsuario = req.params.idUsuario;
    console.log(idUsuario);
    usuarioController.listarHistorico(req, res);
});
router.get("/kpiMetrica/:idUsuario", function (req, res) {
    idUsuario = req.params.idUsuario;
    console.log(idUsuario);
    usuarioController.kpiMetrica(req, res);
});
//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
    console.log("logando...")
});
router.post("/cadastroFinal/:idUsuario", function (req, res) {
    idUsuario = req.params.idUsuario;
    sexo = req.params.sexo;
    console.log(sexo);
    usuarioController.cadastroFinal(req, res);
});
router.post("/cadastroTreino/:idUsuario", function (req, res) {
    console.log('teste')
    usuarioController.cadastroTreino(req, res);
});

module.exports = router;