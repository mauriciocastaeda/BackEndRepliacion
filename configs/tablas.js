const mysql = require('mysql2/promise');
/*
// Configuración de la conexión a MySQL
const dbConfig = {
  host: 'localhost', // Cambia esto si tu servidor MySQL no está en localhost
  user: 'root',
  password: 'root',
  database: 'proyecto2'
};

// Función para obtener los datos de todas las tablas
async function obtenerDatosTablas() {
  const connection = await mysql.createConnection(dbConfig);

  try {
    // Consulta para obtener los datos de la tabla Usuarios
    const [usuarios] = await connection.execute('SELECT * FROM Usuarios');

    // Consulta para obtener los datos de la tabla Lugares
    const [lugares] = await connection.execute('SELECT * FROM Lugares');

    // Consulta para obtener los datos de la tabla Eventos
    const [eventos] = await connection.execute('SELECT * FROM Eventos');

    // Consulta para obtener los datos de la tabla Boletos
    const [boletos] = await connection.execute('SELECT * FROM Boletos');

    // Consulta para obtener los datos de la tabla Reservas
    const [reservas] = await connection.execute('SELECT * FROM Reservas');

    // Imprimir los datos en consola (puedes devolverlos o manipularlos según necesites)
    console.log('Usuarios:', usuarios);
    console.log('Lugares:', lugares);
    console.log('Eventos:', eventos);
    console.log('Boletos:', boletos);
    console.log('Reservas:', reservas);

    // Puedes retornar los datos si deseas utilizarlos en otro lugar
    return { usuarios, lugares, eventos, boletos, reservas };
  } catch (error) {
    console.error('Error obteniendo datos de las tablas:', error);
    throw error;
  } finally {
    // Cerrar la conexión
    await connection.end();
  }
}

// Exportar la función para usarla en otras partes del proyecto
module.exports = { obtenerDatosTablas };
*/