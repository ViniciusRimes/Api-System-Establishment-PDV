const {Sequelize} = require('sequelize')

const conn = new Sequelize('Establishment', 'root', '16042003', {
    dialect: 'mysql',
    host: 'localhost'
})
module.exports = conn