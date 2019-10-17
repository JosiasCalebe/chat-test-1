// configurações
const express = require('express')
const app = express()
const socketio = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);

// mongodb
var mongoose = require("mongoose");

//Rotas
const index = require('./routes/index')
const itensRoute = require('./routes/itensRoute')
const usuariosRoute = require('./routes/usuariosRoute')

// cors
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, x-access-token")
	next()
})

// mongodb 
mongoose.connect('mongodb://localhost:27017/contapragente', {
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

io.on("connection", (socket) => {

  socket.on('join', (room, callback) => {

      socket.emit('message', { user: 'admin', text: `${localStorage.getItem("id-user")}, bem vindo a sala ${room}!` });
      socket.broadcast.to(user.room).emit('message', { user:'admin', text: `${localStorage.getItem("id-user")}, entrou!` });

      socket.join(room);

      callback();
  });

  socket.on('sendMessage', (message, callback) => {
      const user = localStorage.getItem("id-user");
      if(user){
          io.to(localStorage.getItem("moderador-livre")).emit('message', { user: user.id, text: message });
      }
      callback();
  });

  socket.on('disconnect', () =>{
      localStorage.setItem("a",null);
  });
});
 
module.exports = app