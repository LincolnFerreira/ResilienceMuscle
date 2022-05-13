const express = require('express');
// é necessario o path para chamar os caminhos das pastas ... ex: ./html/index.html
const path = require('path');
const cors = require('cors');
const {insereUsuario} = require('./public/database/db');
const app = express();
const porta = 4000;
    //é uma middleware que transforma tudo que chegar nas solicitações JSON ele transforma em dados analisados em arquivos req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
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
app.post('/cadastro', async  (req, res) =>{
    
    console.log(req.body)
    await insereUsuario(req.body)
    
})


app.post('/login', async  (req, res) =>{
    
    console.log(req.body)
    await autenticacao(req.body)
    })
    app.listen(porta, ()=>{
        console.log(`SERVIDOR RODANDO NA PORTA ${porta}`)
    })
