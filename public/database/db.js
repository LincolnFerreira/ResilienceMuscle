//conexão com banco de dados usando async
const conectar = async () =>{
    //verificação... se não estiver conectado, ele vai mandar conectar
    if(global.conexao && global.conexao.state !='disconected')
        return global.conexao;

    const mysql = require('mysql2/promise');
    const conn = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "admin123@",
        database: 'resilienceMuscle'
    });
    console.log('Conectou ao banco com sucesso!!!');
    global.conexao=conn;
    return conn;

}
const exibeUsuarios = async() =>{
    const conn = await conectar();
    const [linhas] = await conn.query('SELECT * FROM usuario;');
    return await linhas;
}
async function insereUsuario({nomeApp, sobrenomeApp, dtNascApp, emailApp, senhaApp} ){
    const conn = await conectar();
    const sql = 'INSERT INTO usuario(nome, sobrenome, dtNasc, email, senha) VALUES (?,?,?,?,?);';
    const values = [nomeApp,  sobrenomeApp, dtNascApp, emailApp, senhaApp];
    await conn.query(sql,values);
    console.log('inserido com sucesso!');
    console.log(values);
} 

module.exports = {exibeUsuarios,insereUsuario}