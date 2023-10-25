const {Sequelize} = require('sequelize')

const conn = new Sequelize('establishment', 'root', '16042003', {
    dialect: 'mysql',
    host: 'localhost'
})
module.exports = conn