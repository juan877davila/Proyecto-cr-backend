const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articuloSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  talla: {
    type: String,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  tipo: {
    type: String,
  }
  },{
  timestamps: true,
});

const Articulo = mongoose.model('Articulo', articuloSchema);

module.exports = Articulo;