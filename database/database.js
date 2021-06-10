const sequelize = require('sequelize')
const conection = new sequelize(
    'guiaperguntas',
    'root',
    'admin', 
    {
    host:'localhost',
    dialect: 'mysql'
    }
)
module.exports = conection;