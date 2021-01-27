"use strict"
//import database connection file as a db object into this file
var db = require('../db-connection');
const Restaurant = require("./Restaurant");

class RestaurantDB {
    getAllRestaurants(request, respond) {
     var sql = "select * from restaurant_booking.restaurant";
        db.query(sql, function (error, result) {
            if (error) {
                respond.status(400).json({ message: "Retrieval  Unsuccessful" });
            }
            else {
                respond.status(200).json(result);
            }
        });
    }
}
//to enable other modules/files to be able to use this object
module.exports = RestaurantDB;