const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const {body} = require('express-validator')
const verifyToken = require('../helpers/verifyToken')

router.post('/create', [
    body('name').notEmpty().withMessage('O campo NOME não pode ser vazio'),
    body('price').notEmpty().withMessage('O campo PREÇO não pode ser vazio'),
    body('qty').notEmpty().withMessage('O campo QUANTIDADE não pode ser vazio'),
],verifyToken, ProductController.create)
router.delete('/delete/:id', verifyToken, ProductController.delete)
router.patch('/edit/:id', verifyToken, ProductController.editProduct)
router.get('/all', verifyToken, ProductController.getAllProducts)
router.get('/:id', verifyToken, ProductController.getProductById)
router.get('/?q=', verifyToken, ProductController.getProductsByName)

module.exports = router