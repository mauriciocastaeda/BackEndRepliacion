var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const mysql = require('mysql2');
const db = require('./configs/db');

/*
const uri = "mongodb+srv://mau:12345@clusterbase.a15zi3m.mongodb.net/Replicacion?retryWrites=true&w=majority";

async function main() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Conectar al cluster de MongoDB
        await client.connect();
        console.log("Conexión a MongoDB establecida correctamente");

        // Definir la ruta para obtener los datos de la colección "Lugares"
        app.get('/lugares', async (req, res) => {
            try {
                const collection = client.db("Replicacion").collection("Lugares");
                const lugares = await collection.find({}).toArray();
                res.json(lugares);
            } catch (err) {
                console.error('Error al obtener lugares:', err);
                res.status(500).json({ message: 'Error interno del servidor', error: err.message });
            }
        });

    } catch (e) {
        console.error(e);
    }
}

main().catch(console.error);
*/

// Crea la conexión a la base de datos


var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var lugaresRouter = require('./routes/lugares');
var boletosRouter = require('./routes/boletos');
var eventosRouter = require('./routes/eventos');
var reservasRouter = require('./routes/reservas');

var app = express();
const port = 22500;


/*
// Conexión a MongoDB a través de conexión SRV
const mongoURI = 'mongodb+srv://mau:12345@clusterbase.a15zi3m.mongodb.net/<nombre_de_base_de_datos>';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión a MongoDB establecida'))
    .catch(err => console.log('Error al conectar a MongoDB:', err));


*/
    
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/lugares', lugaresRouter);
app.use('/boletos', boletosRouter);
app.use('/eventos', eventosRouter);
app.use('/reservas', reservasRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

/*
app.get('/datos', async (req, res) => {
  try {
    const datos = await obtenerDatosTablas();
    res.json(datos);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo datos de las tablas' });
  }
});
*/
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, function () {
  console.log('Server is listening on port ' + port);
});

module.exports = app;
