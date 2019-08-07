const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EvaluacionesSchema = new Schema({
  Id: String,
  descripcion: String,
  nivel: String,
  ponderado: String,
  Alumnos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Alumnos"
    }
  ]
});

var Evaluaciones = mongoose.model("Evaluaciones", EvaluacionesSchema);
module.exports = Evaluaciones;