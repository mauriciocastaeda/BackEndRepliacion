var express = require('express');
var router = express.Router();
const Lugar = require('../models/lugar');
const { MongoClient } = require('mongodb');
const db = require('../configs/db');

//Para MongoDB
//const uri = "mongodb+srv://mau:12345@clusterbase.a15zi3m.mongodb.net/Replicacion?retryWrites=true&w=majority";

/* GET users listing. */
router.get('/', function(req, res, next) {
  const query = 'SELECT * FROM lugares';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      return res.status(500).json({ error: 'Error al obtener los datos de lugares' });
    }

    res.json(results);
  })

});

module.exports = router;

