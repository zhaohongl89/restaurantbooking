"use strict"
//import database connection file as a db object into this file
var db = require('../db-connection');
const User = require("./User");

class UserDB {
    login(request, respond) {
        var username = request.body.username;
        var password = request.body.password;
        var sql = "select is_admin from user where username = ? and password = ?";
        var values = [username, password];

        db.query(sql, values, function (error, result) {
            if (error) {
                respond.status(401).json({ message: "Login Unsuccessful" });
            }
            else {
                respond.status(200).json(result);
            }
        });
    }
    register(request, respond) {
        var username = request.body.username;
        var password = request.body.password;
        var is_admin = "0";

        var sql = "INSERT into user(username, password, is_admin)" +
            "VALUES(?,?,?)";
        var values = [username, password, is_admin]
        db.query(sql, values, function (error, result) {
            if (error) {
                respond.status(401).json({ message: "Registration Unsuccessful" });
            }
            else {
                respond.json({ message: "Registration Successful" });
            }
        });
    }
}
//to enable other modules/files to be able to use this object
module.exports = UserDB;