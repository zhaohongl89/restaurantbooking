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

var server = app.listen(process.env.PORT || 8080, "127.0.0.1",  function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
