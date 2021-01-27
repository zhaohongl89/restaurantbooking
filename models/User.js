"use strict";
class User {
    constructor(id, username, password, is_admin) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.is_admin = is_admin;
    }
    getId() {
        return this.id;
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    getIsAdmin() {
        return this.is_admin;
    }
    

}
//to enable other modules/files to be able to use this object
module.exports = User;
