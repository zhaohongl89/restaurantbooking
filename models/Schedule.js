"use strict";
class Schedule {
    constructor(id, restaurantId, date, slots_left) {
        this.id = id;
        this.restaurantId = restaurantId;
        this.date = date;
        this.slots_left = slots_left;
    }
    getId() {
        return this.id;
    }
    getRestaurantId() {
        return this.restaurantId;
    }
    getDate() {
        return this.date;
    }
    getSlotsLeft() {
        return this.slots_left;
    }

}
//to enable other modules/files to be able to use this object
module.exports = Schedule;
