var usuarios = require('../model/Usuario')
const jwt = require("jsonwebtoken")

exports.get = (req, res, next) => {
	usuarios.find({}, function (err, response) {
		if (err) {
			return handleError(err);
		}
		return res.status(200).send(response);
	})
}

exports.getById = (req, res) => {   
	usuarios
	.findById(req.params.id)
	.exec(function(err, usuario) {
		if (err) return res.status(500).send(err);
		if (usuario) return res.status(200).json(usuario);
		return res.status(404).json({"mensagem":"usuario não encontrado."});
	});
}

exports.post = async (req, res) => {
    usuarios.create(req.body, function (err, response) {
		if (err) {
			console.log("falhou");
			return handleError(err);
		}
		console.log("sucesso");
		return res.status(200).send({ "mensagem" : "Cadastrado com sucesso." });
	  })
}

exports.postLogin = async (req, res) => {
    authenticatesUser(req.body, (error, id) => {
        let token;
    
        if (error) {
          return res.status(error.code).send(error.message);
        }
    
        token = jwt.sign({id}, process.env.SECRET, {
          expiresIn: 30000000000000
		});
        res.send({ auth: true, token, id });
      });
	
}

function authenticatesUser(authUser, cb) {
	usuarios.findOne(
	  {
		email: authUser.email,
		senha: authUser.senha
	  },
	  function(error, response) {
		if (error) {
		  return cb({ code: 404, message: "Usuário ou senha inválidos." });
		} else if (response === null) {
		  return cb({ code: 404, message: "Usuário ou senha inválidos." });
		} else {
		  return cb(null, response.id);
		}
	  }
	);
  }