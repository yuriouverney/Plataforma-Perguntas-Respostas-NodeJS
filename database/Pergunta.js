const sequelize = require('sequelize')
const conection = require('./database')

const pergunta = conection.define('perguntas',{
    titulo:{
        type: sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: sequelize.TEXT,
        allowNull: false
    }

});

pergunta.sync({force: false}).then(() => {
    console.log("Tabelas criadas com sucesso!")
});