var sql = require("../connection");

var Person = function(person){
    this.AU_ID = person.AU_ID;
    this.name = person.name;
    this.phone = person.phone;
}

// get all people
Person.getAll = function(result){
    sql.query("SELECT * FROM person", function(err, res){
        if(err){
            console.log("\nError: " + err);
            result(error, null);
        } else {
            res = JSON.parse(JSON.stringify(res));
            result(null, res);
        }
    });
};

// get person by id
Person.getByID = function (id, result) {
    sql.query("SELECT * FROM person WHERE AU_ID = ? ", id, function (error, res) {
        if (error) {
            console.log("\nError: ", error);
            result(error, null);
        } else {
            res = JSON.parse(JSON.stringify(res));
            result(null, res);
        }
    });
};

// create person
Person.add = function (new_person, result) {
    sql.query("INSERT INTO person SET ?", new_person, function (error, res) {
        if (error) {
            console.log("\nError: ", error);
            result(error, null);
        } else {
            res = JSON.parse(JSON.stringify(res));
            result(null, res);
        }
    });
};

// update person
Person.updateByID = function (id, new_person, result) {
    sql.query("UPDATE person SET person = ? WHERE AU_ID = ?", [new_person.new_person, id], function (error, res) {
        if (error) {
            console.log("\nError: ", error);
            result(null, error);
        } else {
            res = JSON.parse(JSON.stringify(res));
            result(null, res);
        }
    });
};

// delete person
Person.remove = function (id, result) {
    sql.query("DELETE FROM person WHERE AU_ID = ?", [id], function (error, res) {
        if (error) {
            console.log("\nError: ", error);
            result(null, error);
        } else {
            res = JSON.parse(JSON.stringify(res));
            result(null, res);
        }
    });
};

module.exports = Person;