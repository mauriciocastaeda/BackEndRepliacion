var express = require('express');
var router = express.Router();
const db = require('../configs/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const query = 'SELECT * FROM usuarios';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      return res.status(500).json({ error: 'Error al obtener los datos de lugares' });
    }

    res.json(results);
  })

});


module.exports = router;