var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql2');
const db = require('./configs/db');
const cors = require('cors'); // Importa el paquete CORS

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var lugaresRouter = require('./routes/lugares');
var boletosRouter = require('./routes/boletos');
var eventosRouter = require('./routes/eventos');
var reservasRouter = require('./routes/reservas');

var app = express();
const port = 22500;

// Configura CORS para permitir todas las solicitudes desde cualquier origen (*)
app.use(cors());

// Resto de la configuración de Express
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

// Manejo de errores 404 y otros errores
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Inicia el servidor
app.listen(port, function () {
  console.log('Servidor escuchando en el puerto ' + port);
});

module.exports = app;
