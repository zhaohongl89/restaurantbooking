"use strict";
class Booking {
    constructor(id, booking_date, userId, scheduleId) {
        this.id = id;
        this.booking_date = booking_date;
        this.userId = userId;
        this.scheduleId = scheduleId;
    }
    getId() {
        return this.id;
    }
    getBookingDate() {
        return this.booking_date;
    }
    getUserId() {
        return this.userId;
    }
    getScheduleId() {
        return this.scheduleId;
    }
}
//to enable other modules/files to be able to use this object
module.exports = Booking;
