const express = require('express');
const app = express()

//setando o express para utilizar o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
})

port = 3000

app.listen(port, () =>{
    console.log("Servidor rodando na porta: " + port)
})