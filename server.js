"use strict";

const express = require("express");
//import routes for server config
const routeUser = require('./routes/routeUser');
const routeRest = require('./routes/routeRestaurant');

const bodyParser = require("body-parser");
var app = express();
//var host = "127.0.0.1";
//var port = 8080;
var startPage = "index.html";

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//add routes to application
routeUser.routeUser(app);
routeRest.routeRest(app);

function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

app.get("/" + startPage, gotoIndex);

app.route("/");

app.listen(process.env.PORT || 8080);
