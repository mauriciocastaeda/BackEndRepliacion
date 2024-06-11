
// db.js
const mysql = require('mysql2');

// Crea la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',      // Cambia esto si tu base de datos no está en localhost
  user: 'root',     // Reemplaza con tu usuario de MySQL
  password: 'root', // Reemplaza con tu contraseña de MySQL
  database: 'proyecto2' // Reemplaza con el nombre de tu base de datos
});

// Conecta a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conectado a la base de datos como id ' + connection.threadId);
});

module.exports = connection;
