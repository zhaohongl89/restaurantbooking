var mysql = require('mysql');
var connection = mysql.createPool({
    host:'u3r5w4ayhxzdrw87.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port:'3306',
    user:'k5kqwn0xgxm4yqep',
    password:'jonbh1cet0d0rdqe',
    database:'dkvsgtjpxyaqnh3u'
});
module.exports = connection;