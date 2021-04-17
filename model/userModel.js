var sql = require("../connection");

var User = function(user){
    this.AU_ID = user.AU_ID;
    this.username = user.username;
    this.password = user.password;
}

// get all users
User.getAll = function (result) {
    sql.query("SELECT * FROM user", function(error, res){
        if (error) {
            console.log("\nError: ", error);
            result(error, null);
        } else {
            res = JSON.parse(JSON.stringify(res));
            result(null, res);
        }
    });
};

// update password
User.update = function (username, password, result) {
    sql.query("UPDATE user SET user.password = ? WHERE user.username = ?", [password, username], function(error, res){
        if (error) {
            console.log("\nError: ", error);
            result(error, null);
        } else {
            res = JSON.parse(JSON.stringify(res));
            result(null, res);
        }
    });
};

module.exports = User;