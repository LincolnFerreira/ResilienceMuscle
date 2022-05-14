var conn = require("../public/database/db");

async function cadastrar(){
    const conn = await conectar();
    const sql = 'INSERT INTO usuario(nome, sobrenome, dtNasc, email, senha) VALUES (?,?,?,?,?);';
    const values = [nomeApp,  sobrenomeApp, dtNascApp, emailApp, senhaApp];
    await conn.query(sql,values);
    console.log('inserido com sucesso!');
    console.log(values);
} 

module.exports = {
    cadastrar
};