const jwt = require('jsonwebtoken')
require('dotenv').config()

//CRIACAO DO TOKEN
async function createUserToken(user, req, res){
    const token = jwt.sign({
        email: user.email,
        id: user.id
    }, process.env.SECRET)
    try{
        res.status(201).json({message: 'Você está autenticado!', token: token, email: user.email, id: user.id})
    }catch(error){
        res.status(500).json({message: error})
    }
}
module.exports = createUserToken