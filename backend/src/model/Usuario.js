
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let UsuarioSchema = new Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    email: { type: String, unique: true },
    password: { type: String }
  },
  { collation: "usuarios", versionKey: false }
);

let usuarios = mongoose.model("usuarios", UsuarioSchema);

module.exports = usuarios;