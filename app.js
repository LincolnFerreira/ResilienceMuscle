const express = require('express');
// é necessario o path para chamar os caminhos das pastas ... ex: ./html/index.html
const path = require('path');
const app = express();
const porta = 4000;

(async () =>{
    const conecta = require('./public/database/db');
    const usuarios = await conecta.exibeUsuarios();
    await conecta.insereUsuario({nome: 'Lincoln', sobrenome: 'Ferreira', dtNasc: '2022/05/12', email: 'lincoln@gmail', senha: 'admin123'});
    console.log(usuarios);
    console.log('')
})();


app.use(express.static(__dirname + '/public'));
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, './public/html/index.html'));
})
app.get('/index.html', (req,res) =>{
    res.sendFile(path.join(__dirname, './public/html/index.html'));
})
app.get('/login.html', (req,res) =>{
    res.sendFile(path.join(__dirname, './public/html/login.html'));
})
app.get('/cadastro.html', (req,res) =>{
    res.sendFile(path.join(__dirname, './public/html/cadastro.html'));
})

app.listen(porta, ()=>{
    console.log(`SERVIDOR RODANDO NA PORTA ${porta}`)
})