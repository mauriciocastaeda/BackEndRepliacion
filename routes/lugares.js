var express = require('express');
var router = express.Router();
const Lugar = require('../models/lugar');
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://mau:12345@clusterbase.a15zi3m.mongodb.net/Replicacion?retryWrites=true&w=majority";

/* GET users listing. */
router.get('/', function(req, res, next) {
  
});

module.exports = router;

