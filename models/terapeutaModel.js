const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let terapeutaSchema = new Schema({
    id: {},
    nombre: {
        type: String
    },
    apellido: {},
    genero: {},
    edad: {},
    telefono: {},
    municipio: {},
    departamento: {},
    email: {}
});

module.exports = mongoose.model("Terapeuta", terapeutaSchema);