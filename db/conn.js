const {Sequelize} = require('sequelize')

const conn = new Sequelize('establishment', 'root', '16042003', {
    dialect: 'mysql',
    host: 'establishment.cdme6glddevi.sa-east-1.rds.amazonaws.com'
})
module.exports = conn
