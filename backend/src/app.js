// configurações
const express = require('express')
const app = express()
// mongodb
var mongoose = require("mongoose");

//Rotas
const index = require('./routes/index')
const itensRoute = require('./routes/itensRoute')
const usuariosRoute = require('./routes/usuariosRoute')

// cors
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})

// mongodb 
mongoose.connect('mongodb://127.0.0.1:27017/contapragente', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// mongoose.connect('mongodb://admin:admin132@ds329058.mlab.com:29058/contapragente', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// verificar se foi conectado mesmo
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("conexão feita com sucesso.");
});

app.use(express.json());
app.use('/', index)
app.use('/api/usuarios', usuariosRoute)
app.use('/api/itens', itensRoute)
 
module.exports = app