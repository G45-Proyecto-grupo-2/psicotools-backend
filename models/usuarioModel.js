const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    id: {},
    nombre: {
        type: String,
        required : true
    },
    apellido: {
        type : String,
        required : true
    },
    genero: {
        type : String,
        required : true,
        enum : ['masculino', 'femenino', 'otro']
    },
    edad: {
        type : Number,
        required : true
    },
    telefono: {
        type : Number,
        required : true
    },
    municipio: {
        type : String,
        required : true
    },
    departamento: {
        type : String,
        required : true
    },
    email: {
        type : String,
        unique : true,
        trim : true,
        required : true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);