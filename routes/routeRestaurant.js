"use strict"
const restdb = require('../models/RestaurantDB');
const schdb = require('../models/ScheduleDB');
const bookdb = require('../models/BookingDB');

var restDBObject = new restdb();
var schDBObject = new schdb();
var bookDBObject = new bookdb();

function routeRest(app) {
    app.route('/restaurants')
        .get(restDBObject.getAllRestaurants);
    app.route('/schedule/:restaurantId')
        .get(schDBObject.getScheduleForRestaurant);
    app.route('/schedule/:scheduleId')
        .put(schDBObject.bookScheduleSlotForRestaurant);
    app.route('/booking/:userId')
        .get(bookDBObject.getRestaurantBookingByUserId);
    app.route('/booking')
        .post(bookDBObject.bookRestaurant);
    app.route('/booking/:bookingId')
        .delete(bookDBObject.cancelBookRestaurant)
        .put(bookDBObject.updateBookRestaurant);
}
//to enable other modules/files to be able to use this object
module.exports = { routeRest };