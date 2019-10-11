const express = require('express')
const router = express.Router()
var UsuariosController = require('../controllers/usuariosController')

router.post('/', UsuariosController.post);
router.get('/', UsuariosController.get);
router.post('/login', UsuariosController.postLogin);
// router.get('/', function(req, res, next) {
// 	res.status(200).send({
// 		title: 'ContaPraGente',
// 		version: '0.0.1'
// 	})
// })

module.exports = router
