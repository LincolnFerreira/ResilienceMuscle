//conexão com banco de dados usando async
const conectar = async () =>{
    //verificação... se não estiver conectado, ele vai mandar conectar
    if(global.conexao && global.conexao.state != 'disconected')
        return global.conexao;

    const mysql = require('mysql2/promise');
    const conn = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "admin123@",
        database: 'resilienceMuscle'
    });
    console.log('Conectou ao banco com sucesso!!!');
    global.conexao = conn;
    return conn;

}
// const exibeUsuarios = async() =>{
//     const conn = await conectar();
//     const [linhas] = await conn.query('SELECT * FROM usuario;');
//     return await linhas;
// }


 module.exports = { conectar};