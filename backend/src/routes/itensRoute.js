var express = require('express')
var router = express.Router()
var ItensController = require('../controllers/itensController')
var VerificaToken = require('../utils/tokenUtils');

router.get('/', VerificaToken, ItensController.get)
router.get('/:id', ItensController.getById)
router.post('/', ItensController.post)

module.exports = router
