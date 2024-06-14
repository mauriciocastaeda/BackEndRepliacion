const mysql = require('mysql2');
// Configuración de los nodos del cluster
const clusterNodes = [
  { host: '192.168.1.40', port: '3306' }, // Nodo de gestión
  { host: '192.168.1.37', port: '3306' }, // Nodo de datos 1
  { host: '192.168.1.41', port: '3306' }  // Nodo de datos 2
];
//pp.use(cors());
// Configuración del pool de conexiones
const pool = mysql.createPoolCluster();

// Agrega los nodos del cluster al pool
for (let i = 0; i < clusterNodes.length; i++) {
  const node = clusterNodes[i];
  pool.add({
    ...node,
    connectionLimit: 10, // Establece el límite de conexiones para cada nodo
    user: 'root', // Reemplaza con tu usuario de MySQL
    password: 'Sistemas23', // Reemplaza con tu contraseña de MySQL
    database: 'proyecto' // Reemplaza con el nombre de tu base de datos
  });
}

// Manejo de errores de conexión
pool.on('error', err => {
  console.error('Error en el pool de conexiones MySQL:', err);
});

module.exports = pool;

