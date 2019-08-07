const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlumnosSchema = new Schema({
  Id: String,
  nombre: String,
  apellido: String,
  Temas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Temas"
    }
  ]
});

var Alumnos = mongoose.model("Temas", AlumnosSchema);
module.exports = Alumnos;