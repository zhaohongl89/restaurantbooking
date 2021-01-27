"use strict"
const userdb = require('../models/UserDB');

var userDBObject = new userdb();

function routeUser(app) {
    app.route('/login')
        .post(userDBObject.login);
    app.route('/register')
        .post(userDBObject.register);  
}
//to enable other modules/files to be able to use this object
module.exports = { routeUser };