var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, sobrenome, dtNasc, email, senha) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, sobrenome, dtNasc, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, sobrenome, dtNasc, email, senha) VALUES ('${nome}', '${sobrenome}', '${dtNasc}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarHistorico(idUsuario) {
    var instrucao = `
        select count(idTreino) as vericaFormulario from desempenho where fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucao);

}

function kpiMetrica(idUsuario) {
    var instrucao = `
        select * from desempenho where fkUsuario = ${idUsuario};
    `;
    // console.log('MODEL AQ' + idUsuario)

    return database.executar(instrucao);

}

function cadastroFinal(idUsuario, sexo, classificacao, frequencia) {

    var instrucao = `update usuario set sexo = '${sexo}' where idUsuario = '${idUsuario}';`;
    var instrucao2 = `update usuario set classificacao = '${classificacao}' where idUsuario = '${idUsuario}';`
    var instrucao3 = `update usuario set frequencia = '${frequencia}' where idUsuario = '${idUsuario}';`;

    // console.log('MODEL AQ' + idUsuario)
    database.executar(instrucao3);
    database.executar(instrucao2);
    return database.executar(instrucao);


}


function cadastroTreino(idUsuario,
    input_musculo,
    input_exercicio,
    input_peso,
    select_intensidade,
    repeticao_maxima,
    repeticao_minima) {
    var instrucao = `
    insert into desempenho (data, musculo, exercicio, intensidade, peso, repeticoesMax, repeticoesMin, fkUsuario) VALUES ('','${musculo}','${exercicio}','${peso}','${intensidade}','${repeticaoMaxima}','${repeticaoMinima}')
`;
}



function mensagemRandomica() {
    var instrucao = `SELECT idTreino FROM treino ORDER BY RAND() LIMIT 1;`
}
module.exports = {
    entrar,
    cadastrar,
    listar,
    listarHistorico,
    kpiMetrica,
    cadastroFinal
};