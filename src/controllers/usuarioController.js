var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    nome = req.body.nomeServer;
    sobrenome = req.body.sobrenomeServer;
    dtNasc = req.body.dtNascServer;
    email = req.body.emailServer;
    senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (dtNasc == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, dtNasc, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    // 500 = erro interno do servidor!!
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listarHistorico(req, res) {
    idUsuario = req.params.idUsuario;

    usuarioModel
        .listarHistorico(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            res.status(500).json(erro);
        });
}

function cadastroTreino(req, res) {
    var idUsuario = req.params.idUsuario;
    var input_musculo = req.params.input_musculo;
    var input_exercicio = req.params.input_exercicio;
    var input_peso = req.params.input_peso;
    var select_intensidade = req.params.select_intensidade;
    var repeticao_maxima = req.params.repeticao_maxima;
    var repeticao_minima = req.params.repeticao_minima;
    usuarioModel.cadastroFinal(
            idUsuario,
            input_musculo,
            input_exercicio,
            input_peso,
            select_intensidade,
            repeticao_maxima,
            repeticao_minima)
        .then(
            function (resultado) {
                res.status(200).json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                // 500 = erro interno do servidor!!
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastroFinal(req, res) {
    idUsuario = req.params.idUsuario;
    console.log("cadastro Final" + idUsuario)
    sexo = req.body.sexo;
    classificacao = req.body.classificacao;
    frequencia = req.body.frequencia;
    usuarioModel.cadastroFinal(idUsuario, sexo, classificacao, frequencia)
        .then(
            function (resultado) {
                res.status(200).json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                // 500 = erro interno do servidor!!
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function kpiMetrica(req, res) {
    idUsuario = req.params.idUsuario;

    usuarioModel.kpiMetrica(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            res.status(500).json(erro);
        })
}
module.exports = {
    entrar,
    cadastrar,
    listar,
    listarHistorico,
    kpiMetrica,
    testar,
    cadastroFinal
}