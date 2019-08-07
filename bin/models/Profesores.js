const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfesoresSchema = new Schema({
  Id: String,
  cedula: String,
  nombre: String,
  apellido: String,
  Temas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Temas"
    }
  ]
});

var Profesores = mongoose.model("Temas", ProfesoresSchema);
module.exports = Profesores;