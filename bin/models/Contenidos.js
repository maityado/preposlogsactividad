const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Contenidos = new Schema({
  id: String,
  nombre: String,
  descripcion: String,
  Temas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Temas"
    }
  ]
})


var Temas = mongoose.model("Temas", SongSchema);
module.exports = Temas;