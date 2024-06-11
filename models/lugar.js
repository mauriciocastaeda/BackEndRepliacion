const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const lugarSchema = new mongoose.Schema({
    nombre: String,
    direccion: String,
    capacidad: Number,
    descripcion: String
});

const Lugar = mongoose.model('Lugar', lugarSchema);

module.exports = Lugar;
