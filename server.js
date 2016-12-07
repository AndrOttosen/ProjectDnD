// Base Setup for the server - NODE.JS plugins
var express      = require('express');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var path         = require('path');
var session      = require('express-session');
var passport     = require('passport');
var logger       = require('morgan');
 
//MongoDB
var mongoose     = require('mongoose');
var mongodb      = require('mongodb');
 
//App
var app          = express();
var port         = 3003;
 
 
//Connect til mongooseDB
mongoose.connect('mongodb://localhost/');
 
//MODELS - Schemas.
var User = require('./models/users');

 
//ROUTES
var router = express.Router();
var loginmanager = require('./Routes/loginmanager.js')(passport);
require('./Routes/users.js')(router, mongoose, User);
require('./Routes/loginmanager.js')(passport);
 
 
app.use(logger('dev'));
app.use(session({
  secret: 'keyboard cat',
  resave: 'true',
  saveUninitialized: 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
 
app.use('/auth', loginmanager);
app.use('/api', router);
 
 
 
//// Initialize Passport
var initPassport = require('./passport-init');
initPassport(passport);
 
 
//Test om der er forbindelse til API
router.get('/', function(req, res) {
    res.json({ message: 'Apiet virker, der er hul igennem du'});
});
 
 
//Besked til console når der oprettes/slettes i DB
router.use(function(res, req, next) {
    console.log('Der sker noget her!')
    next();
});
 
 
//Consol besked ved start af server
app.listen(port);
console.log('We are live on port ' + port);
 
module.exports = app;