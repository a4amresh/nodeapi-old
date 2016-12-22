var express = require("express");
var app = express(); // Asign Express to App
//var port = 4000; // Declare Port
var bodyParser = require("body-parser");
app.set('port', (process.env.PORT || 5000));
/**
 * Set Statis Path and sert View Engine
 */
var path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");
app.engine("html", require("ejs").renderFile);
/**
 * Set Static Folder to App
 */
app.use(express.static(path.join(__dirname, 'server')));
/**
 * Configure App to use BodyParser() 
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/**
 * Data Base Connection
 */
var mongoose = require("mongoose");
var dbUri = "mongodb://dbuser:dbpass@ds049476.mlab.com:49476/webcms";
mongoose.connect(dbUri);

/**
 * Routers
 */
var index = require("./server/routes/index/index");
var users = require("./server/routes/users/users");
var tasks = require("./server/routes/tasks/tasks");
app.use("", index);
app.use("", users);
app.use("", tasks);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});