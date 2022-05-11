//começar uma forma em async
const conection = async () =>{
    //pra ele não ficar tentando se conectar no banco toda vez que executar a função, pois se conectar com o banco requer muito tempo
    if(global.conexao && global.conexao.state !='disconected')
        return global.conexao;
    //requisitando a biblioteca de mysql2 com suporte para promices
    const mysql = require('mysql2/promise');
    //começando de fato a conexão com o banco
    const con = mysql.createConnection({
        host:'localgost',
        user:'aluno',
        password:'sptech',
        database: 'resiliencemuscle'
    });
    console.log('Conectado ao banco de dados com sucesso!');
    global.conexao = con;
    return con;

}
module.exports = {conection}