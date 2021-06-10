const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const conection = require('./database/database')
const perguntaModel = require('./database/Pergunta')

//database
conection.authenticate().then(() => {
    console.log("conexão feita com o banco de dados")
}).catch((msgErro) => {
    console.log(mgErro)
})

//setando o express para utilizar o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
//bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//rotas
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) =>{
    const titulo = req.body.titulo;
    const descricao = req.body.descricao

})

port = 3000

app.listen(port, () =>{
    console.log("Servidor rodando na porta: " + port)
})