"use strict";
class Restaurant {
    constructor(id, name, rating, is_open) {
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.is_open = is_open;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getRating() {
        return this.rating;
    }
    getIsOpen() {
        return this.is_open;
    }
}
//to enable other modules/files to be able to use this object
module.exports = Restaurant;
