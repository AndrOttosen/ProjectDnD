//Base server setup for REST API
//Dependencies
var express       = require('express'); // Middleware til routing.
var bodyParser    = require('body-parser'); // Gør muligt at tage HTML input til middleware. req.body();
var cookieParser  = require('cookie-parser'); // Laver en cookie.
var path          = require('path'); // Sti
var session       = require('express-session'); // Create a session middleware with given options.
var logger        = require('morgan'); // console.log() information tilbage både fra req og res. (Uden morgan, vil du kun få info tilbage på res) 
var passport      = require('passport'); // authenticate requests middleware login/register. 
 
//Server setup
var mongoose      = require('mongoose'); // Models schema 
var mongodb       = require('mongodb'); // Databasen
 
//Initial app setup, express and port
var app           = express(); // gør brug af express funktionen.
var port          = 3003; //localhost port
 
//Connectionstring to our MongoDB - Change connectionstring to live URL, when ready for production
mongoose.connect('mongodb://localhost/'); // localhost
 
//Models - Schemas for REST-API(Express)
var User = require('./Models/users'); //require schema for users.
var campaignModel = require ('./Models/campaigns');
 
//REST URLS aka. Routes
var router = express.Router(); // 
var userauths = require('./routes/userauths.js')(passport);
var campaignpost = require('./routes/campaigns.js');
var users = require('./routes/users.js')(passport);

//App middleware - enable logger, session, body and cookie-parser
app.use(logger('dev')); // Developement mode. Andre modes er production til live-produkter.
app.use(session({ // session værdi.
  secret: 'keyboard cat',
  resave: 'true',
  saveUninitialized: 'true'
}));
app.use(bodyParser.json()); //req body-parser.
app.use(bodyParser.urlencoded({ extended: false })); //sætter urlencoded op til true/false.
app.use(cookieParser()); // req cookieParser.
app.use(express.static(path.join(__dirname, 'public'))); //static path op for html/css/js.
app.use(passport.initialize()); // req passport.
app.use(passport.session()); // req passport.session. 

app.use('/', userauths);
app.use('/api', campaignpost);
 
//Use a API tester, EG Postman - make a get request to localhost:3003/ to get a response
app.get('/', function (req, res) { // Test af get funktion for at se om hul igennem. (req/res funktion)
  res.json({ message: 'Hello, our API is running' });
});
 
//A message to our console whenever you manipulate with data in the API
app.use(function (res, req, next) { // Manipulerer du med data, vil denne funktion træde i kræft og efterfølgende den næste (next();)
  console.log('You have manipulated with some data!')
  next();
});
 
// Opretter et medlem
app.post('/user', function (req, res) { // Post funktion for medlem. 
  var user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
 
  user.save(function (err) {
    if (err)
      res.send(err);
 
    res.json({ message: 'Der er oprettet et medlem!!' });
  });
});
 
app.get('/user', function (req, res) { // Get funktion af ALLE medlemmer.
  User.find(function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
});
 
app.get('/user/:user_id', function (req, res) { // Get funktion af SPECIFIK medlem ud fra ID.
  User.findById(req.params.user_id, function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
});
 
// Opdatere et medlem med udfra ID
app.put('/user/:user_id', function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err) {
      res.send(err);
    }
    user.username = req.body.username;
    user.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Medlem updated!' });
    });
 
  });
});
 
app.delete('/user/:user_id', function (req, res) { // Delete funktion ud fra ID.
  User.remove({
    _id: req.params.user_id
  }, function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Bruger slettet' });
  });
});
 
//Consolmessage when we start our server 
// we are live and hot.
app.listen(port);
console.log('We are live and hot on port ' + port);
 
exports = module.exports = app; // Gør App tilgængelig i hele projektet. 