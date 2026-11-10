require('dotenv').config();
var mongoose = require('mongoose');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var connectionString = process.env.MONGO_CON;
mongoose.connect(connectionString);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('MongoDB connected successfully');
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gardensRouter = require('./routes/gardens');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');
var Garden = require('./models/garden');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gardens', gardensRouter);
app.use('/grid', gridRouter);
app.use('/selector', pickRouter);
app.use('/resource', resourceRouter);

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


async function recreateDB() {
  try {
    await Garden.deleteMany({});

    const garden1 = new Garden({
      name: "Rose Garden",
      location: "Missouri",
      areaAcres: 12,
      yearOpened: 1998
    });

    const garden2 = new Garden({
      name: "Green Valley Garden",
      location: "Kansas",
      areaAcres: 20,
      yearOpened: 2005
    });

    const garden3 = new Garden({
      name: "Queens Botanical Garden",
      location: "Texas",
      areaAcres: 35,
      yearOpened: 2010
    });

    await garden1.save();
    await garden2.save();
    await garden3.save();

    console.log("3 gardens saved successfully");
  } catch (err) {
    console.error(err);
  }
}

let reseed = false;

db.once('open', function() {
  if (reseed) {
    recreateDB();
  }
});
