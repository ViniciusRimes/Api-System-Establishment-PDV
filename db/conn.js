const {Sequelize} = require('sequelize')

const conn = new Sequelize('establishment', 'admin', '16042003', {
    dialect: 'mysql',
    host: 'database-1.cdme6glddevi.sa-east-1.rds.amazonaws.com'
})
module.exports = conn
