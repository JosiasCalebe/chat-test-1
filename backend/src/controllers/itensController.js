var itens = require('../model/Item')
// const jwt = require("jsonwebtoken")

exports.get = (req, res, next) => {
	itens.find({}, function (err, response) {
		if (err) {
			return handleError(err);
		}
		return res.status(200).send(response);
	})
}

exports.getById = (req, res) => {   
	itens
	.findById(req.params.id)
	.exec(function(err, item) {
		if (err) return res.status(500).send(err);
		if (item) return res.status(200).json(item);
		return res.status(404).json({"mensagem":"item não encontrado."});
	});
}

exports.post = async (req, res) => {
	itens.create(req.body, function (err, response) {
		if (err) {
			return handleError(err);
		}
		return res.status(200).send({ "mensagem" : "Cadastrado com sucesso." });
	  })

}