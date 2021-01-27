"use strict"
//import database connection file as a db object into this file
var db = require('../db-connection');
const Schedule = require("./Schedule");

class ScheduleDB {
    getScheduleForRestaurant(request, respond) {
        var restId = request.params.restaurantId;
        var sql = "select * from schedule where restaurantId = ?";
        db.query(sql, restId, function (error, result) {
            if (error) {
                respond.status(401).json({ message: "Retrival Unsuccessful" });
            }
            else {
                respond.status(200).json(result);
            }
        });
    }
    bookScheduleSlotForRestaurant(request, respond) {
        var scheduleId = request.params.scheduleId;
        var method = request.body.method;

        var sql = "";
        //0 for booking of schedule
        if (method == "0") {

            sql = "UPDATE schedule set slots_left = slots_left - 1 " +
                "where id = ?";
        }
        //1 for cancellation of schedule
        else if (method == "1") {
            sql = "UPDATE schedule set slots_left = slots_left + 1 " +
                "where id = ?";
        }

        db.query(sql, scheduleId, function (error, result) {
            if (error) {
                respond.status(400).json({ message: "Updated Slots unsuccessfully" });
            }
            else {
                respond.status(200).json({ message: "Updated Slots Successfully" });
            }
        });
    }
}
//to enable other modules/files to be able to use this object
module.exports = ScheduleDB;