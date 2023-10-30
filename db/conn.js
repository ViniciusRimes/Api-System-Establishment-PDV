const {Sequelize} = require('sequelize')

const conn = new Sequelize('establishment', 'admin', 'vrdo1604', {
    dialect: 'mysql',
    host: 'mydatabases.cdme6glddevi.sa-east-1.rds.amazonaws.com'
})
module.exports = conn
