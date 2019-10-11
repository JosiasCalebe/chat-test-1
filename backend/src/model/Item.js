
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let ItemSchema = new Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    descricao: { type: String, unique: true },
    cor: { type: String }
  },
  { collation: "itens", versionKey: false }
);

let itens = mongoose.model("itens", ItemSchema);

module.exports = itens;