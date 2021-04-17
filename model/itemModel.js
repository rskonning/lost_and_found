var sql = require("../connection");


var Item = function(item){
    this.item_id = item.item_id;
    this.category = item.category;
    this.item_name = item.item_name;
    this.building = item.building;
    this.location_area = item.location_area;
    this.count = item.count;
    this.item_value = item.item_value;
    this.description = item.description;
    this.person_found = item.person_found;
    this.person_claimed = item.person_claimed;
    this.date_found = item.date_found;
    this.date_claimed = item.date_claimed;
}

// get method for one
Item.getByID = function (id, result) {
    sql.query("SELECT *, DATE_FORMAT(date_found, '%Y-%m-%dT%H:%i') as date_found, DATE_FORMAT(date_claimed, '%Y-%m-%dT%H:%i') as date_claimed FROM item WHERE item_id = ? ", id, function (error, res) {
        if (error) {
            console.log("\nError: ", error);
            result(error, null);
        } else {
            res = JSON.parse(JSON.stringify(res));
            result(null, res);
        }
    });
};

// date format for date picker:
// DATE_FORMAT(date_found, '%Y-%m-%dT%H:%i') as date_found

// get method for all
Item.getAll = function (result) {
    sql.query("SELECT *, DATE_FORMAT(date_found, '%m-%d-%Y %H:%i') as date_found, DATE_FORMAT(date_claimed, '%m-%d-%Y %H:%i') as date_claimed  FROM item", function (error, res) {
        if (error) {
            console.log("\nError: ", error);
            result(null, error);
        } else {
            res = JSON.parse(JSON.stringify(res));
            result(null, res);
        }
    });
};

// update method
Item.updateByID = function (id, item, result) {
    console.log(item);
    sqlQuery = "UPDATE item SET item_name = ?, category = ?, building = ?, location_area = ?, count = ?, item_value = ?, description = ?, person_found = ?, person_claimed = ?, date_found = ?, date_claimed = ? WHERE item_id = ?";
    values = [item.item_name, item.category, item.building, item.location_area, item.count, item.item_value, 
        item.description, item.person_found, item.person_claimed, item.date_found, item.date_claimed, id];
    sql.query(sqlQuery, values, function (error, res) {
        if (error) {
            console.log("\nError: ", error);
            result(null, error);
        } else {
            res = JSON.parse(JSON.stringify(res));
            result(null, res);
        }
    });
};

// delete method
Item.remove = function (id, result) {
    sql.query("DELETE FROM item WHERE item_id = ?", [id], function (error, res) {
        if (error) {
            console.log("\nError: ", error);
            result(null, error);
        } else {
            res = JSON.parse(JSON.stringify(res));
            result(null, res);
        }
    });
};

// export Item Object
module.exports = Item;