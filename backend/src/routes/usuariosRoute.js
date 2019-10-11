var express = require('express')
var router = express.Router()
var UsuariosController = require('../controllers/usuariosController')

router.get('/', function(req, res, next) {
    	res.status(200).send({
    		title: 'ContaPraGente',
    		version: '0.0.1'
    	})
    })
router.post('/login', UsuariosController.postLogin)
router.post('/', UsuariosController.post)

module.exports = router