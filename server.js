// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongodb = require('mongodb');
var react = require('react');
var reactDom = require('react-dom');
var reactRouter = require('react-router');

//Require Our Schema
var nytreact = require('./models/nytreact.js');
// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. 


//Bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//serve our public folder
app.use(express.static('./public'));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
// mongoose.connect('mongodb://heroku_18zvj3gx:gpmenibb095tud1ecjk7ihok1h@ds155080.mlab.com:55080/heroku_18zvj3gx');
//=====================erase this later
// mongoose.connect("mongodb://localhost/nytreact");
mongoose.connect('mongodb://localhost/3000/nytreact');
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});
//========================erase above & uncomment below

// var db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

// db.on('error', function (err) {
//   console.log('Mongoose Error: ', err);
// });

// db.once('open', function () {
//   console.log('Mongoose connection successful.');
// });

// Connect mongoose to our database
// mongoose.connect(db, function(error) {
//   // Log any errors connecting with mongoose
//   if (error) {
//     console.log(error);
//   }
//   // Or log a success message
//   else {
//     console.log("mongoose connection is successful");
//   }
// });
// -------------------------------------------------

// Main Route. This route will redirect to our rendered React application
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

// This is the route we will send GET requests to retrieve our most recent click data.
// We will call this route the moment our page gets rendered
app.get('/api/', function(req, res) {

  // This GET request will search for the latest clickCount
  nytreact.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

// This is the route we will send POST requests to save each click.
// We will call this route the moment the "click" or "reset" button is pressed.
app.post('/api/', function(req, res){
  
  var newModel = new nytreact(req.body);
  console.log(req.body);

  var modelID = req.body.ID;
  var modelSearchTerm = req.body.searchTerm;
  var modelDate = req.body.date;
  //var  = parseInt(req.body.clicks);

  // Note how this route utilizes the findOneAndUpdate function to update the clickCount.
  nytreact.findOneAndUpdate({"ID": modelID}, {$set: {"searchTerm": modelSearchTerm}}, {upsert: true}).exec(function(err){

    if(err){
      console.log(err);
    }

    else{
        res.send("Updated nytreact");
    }
  });

});


// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});