var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var alunosRouter = require('./routes/aluno.route.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/alunos', alunosRouter);

// --- ROTAS PARA AS PÁGINAS HTML ---

// 1. Rota para a página de LISTAR ALUNOS
app.get('/alunos/listar', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'views', 'listarAlunos.html'));
});

// 2. Rota para a página de CRIAR ALUNO 
app.get('/alunos/criar', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'views', 'criarAluno.html'));
});

// 3. Rota para a página de EDIÇÃO
app.get('/alunos/editar', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'views', 'editarAluno.html')); 
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;