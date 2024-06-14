const express = require('express');
const router = express.Router();
const pool = require('../configs/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error al obtener conexión del pool:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }

    const query = 'SELECT * FROM Lugares';
    connection.query(query, (err, results) => {
      // Importante: siempre liberar la conexión después de usarla para evitar fugas de memoria
      connection.release();

      if (err) {
        console.error('Error al realizar la consulta:', err);
        return res.status(500).json({ error: 'Error al obtener los datos de usuarios' });
      }

      res.json(results);
    });
  });
});

module.exports = router;

