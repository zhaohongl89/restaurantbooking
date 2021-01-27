"use strict"
//import database connection file as a db object into this file
var db = require('../db-connection');
const Booking = require("./Booking");

class BookingDB {
    getRestaurantBookingByUserId(request, respond) {
        var userId = request.params.userId;
        var sql = "select * from booking where userId = ?";
        db.query(sql, userId, function (error, result) {
            if (error) {
                respond.status(401).json({ message: "No Bookings found" });
            }
            else {
                respond.status(200).json(result);
            }
        });
    }
    bookRestaurant(request, respond) {
        var scheduleId = request.body.scheduleId;
        var userId = request.body.userId;
        var booking_date = new Date();

        var sql = "INSERT into booking(booking_date, userId, scheduleId) " +
            "VALUES(?,?,?)";
        
        var values = [booking_date, userId, scheduleId];    
        
        db.query(sql, values, function (error, result) {
            if (error) {
                respond.status(401).json({ message: "Booking Unsuccessful" });
            }
            else {
                respond.status(200).json({ message: "Booking Successful" })
            }
        });
    }
    cancelBookRestaurant(request, respond) {
        var bookingId = request.params.bookingId;

        var sql = "DELETE FROM restaurant_booking.booking WHERE id = ?";
               
        db.query(sql, bookingId, function (error, result) {
            if (error) {
                respond.status(401).json({ message: "Booking Cancellation Unsuccessful" });
            }
            else {
                respond.status(200).json({ message: "Booking Cancellation Successful" })
            }
        });
    }

    updateBookRestaurant(request, respond) {
        var bookingId = request.params.bookingId;
        var booking_date = new Date();
        var scheduleId = request.body.scheduleId;

        var sql = "UPDATE booking SET scheduleId = ?, booking_date = ? " +
            "where id = ?";
        
        var values = [scheduleId, booking_date, bookingId];    

        db.query(sql, values, function (error, result) {
            if (error) {
                respond.status(401).json({ message: "Booking Update Unsuccessful" });
            }
            else {
                respond.status(200).json({ message: "Booking Update Successful" })
            }
        });
    }
    
}
//to enable other modules/files to be able to use this object
module.exports = BookingDB;