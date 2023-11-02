const {Sequelize} = require('sequelize')
require('dotenv').config()

const conn = new Sequelize('establishment', process.env.USER, process.env.PASSWORD, {
    dialect: 'mysql',
    host: 'localhost'
})
module.exports = conn
