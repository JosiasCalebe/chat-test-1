const express = require('express')
const router = express.Router()
var ItensController = require('../controllers/itensController');
var VerificaToken = require('../utils/tokenUtils');
var UsuariosController = require('../controllers/usuariosController');
var ChatController = require('../controllers/chatController');

router.post('/', UsuariosController.post);
router.get('/', UsuariosController.get);
router.post('/login', UsuariosController.postLogin);
router.get('/itens/', ItensController.get)
router.get('/itens/:id', ItensController.getById)
router.post('/itens/', VerificaToken, ItensController.post)
// router.get('/', function(req, res, next) {
// 	res.status(200).send({
// 		title: 'ContaPraGente',
// 		version: '0.0.1'
// 	})
// })

module.exports = router
