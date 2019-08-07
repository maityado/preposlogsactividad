const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadesSchema = new Schema({
  Id: String,
  descripcion: String,
  nivel: String,
  nombre: String,
  Contenidos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Contenidos"
    }
  ]
});

var Actividades = mongoose.model("Actividades", ActividadesSchema);
module.exports = Actividades;