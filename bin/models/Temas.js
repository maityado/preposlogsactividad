const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Temas = new Schema({
  id: String,
  descripcion: String,
  nombre: String
})


var Temas = mongoose.model("Temas", SongSchema);
module.exports = Temas;