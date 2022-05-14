const usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res){
    console.log("ENTRAMOS NA usuarioController");
    res.json("FUNCIONANDO");
}

// function listar(req, res) {
//     usuarioModel.listar()
// }

async function cadastrar(req, res) {
    // estás variaveis estão pegando os valores da pagina html de cadastro
    const nome = req.body.nomeApp;
    const sobrenomeApp = req.body.sobrenomeApp;
    const dtNascApp = req.body.dtNascApp;
    const emailApp = req.body.emailApp;
    const senhaApp = req.body.senhaApp;

    //verificando se nenhum campo preenchido está indefinido
    //400 = Bad request, ou seja uma requisição mal executada por algum motivo
    
    if(nome == undefined){
        res.status(400).send("Seu nome está indefinido");
    } else if (sobrenomeApp == undefined) {
        res.status(400).send("Seu email está indefinido");
    } else if (dtNascApp == undefined) {
        res.status(400).send("Seu email está indefinido");
    } else if (emailApp == undefined) {
        res.status(400).send("Seu email está indefinido");
    } else if (senhaApp == undefined) {
        res.status(400).send("Seu email está indefinido");
    } else {
       usuarioModel.cadastrar(nome, sobrenomeApp, dtNascApp, emailApp, senhaApp)
            .then(
                function (resultado){
                    res.json(resultado);
                }
            ).catch(
                function(erro){
                    console.log(erro);
                    console.log(
                        `\n Ocorreu um erro ao realizar o cadastro! Erro:`,
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

async function insereUsuario(){
    const conn = await conectar();
    const sql = 'INSERT INTO usuario(nome, sobrenome, dtNasc, email, senha) VALUES (?,?,?,?,?);';
    const values = [nomeApp,  sobrenomeApp, dtNascApp, emailApp, senhaApp];
    await conn.query(sql,values);
    console.log('inserido com sucesso!');
    console.log(values);
} 

//exportar todas as funções utilizadas! 

module.exports = {
    testar,
    cadastrar
}