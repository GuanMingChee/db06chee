var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString = process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

var indexRouter = require('./routes/index');
var hauntedplacesRouter = require('./routes/hauntedplaces');
var addmodsRouter = require('./routes/addmods');
var usersRouter = require('./routes/users');
var selectorRouter = require('./routes/selector');
var Haunted_places = require("./models/haunted_places");
var resourceRouter = require('./routes/resource');

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
app.use('/addmods', addmodsRouter);
app.use('/hauntedplaces', hauntedplacesRouter);
app.use('/users', usersRouter);
app.use('/selector', selectorRouter);
//app.use('/haunted_places',Haunted_places);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed on server start 
async function recreateDB(){
// Delete everything 
  await Haunted_places.deleteMany();
//let results=[{"address":"405 Spray Ave, Banff, AB T1L 1J4, Canada","year":1920,"description":"Ghost Bride"},{"address":"333 E Wonderview Ave, Estes Park, CO 80517","year":1911,"description":"Room 217"},{"address":"Trương Định, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Vietnam","year":1989,"description":"Ghost of a young man"}]
  let instance1 = new Haunted_places({address:"1 Raynham Hall, East Raynham, Fakenham NR21 7EP, UK", year:1835, description:"Brown Lady of Raynham Hall"});
  instance1.save( function(err,doc) {
    if(err) return console.error(err);
    console.log("First object saved")
  });
  let instance2 = new Haunted_places({address:"8 Potters Pond, Wotton-under-Edge GL12 7HF, United Kingdom", year:1500, description:"The Witch's Room"});
  instance2.save( function(err,doc) {
    if(err) return console.error(err);
    console.log("Second object saved")
  });
  let instance3 = new Haunted_places({address:"405 Spray Ave, Banff, AB T1L 1J4, Canada", year:1920, description:"Ghost Bride"});
  instance3.save( function(err,doc) {
    if(err) return console.error(err);
    console.log("Third object saved")
  });
}
let reseed = true;
if (reseed) { recreateDB();}

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
