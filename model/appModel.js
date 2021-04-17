'use strict';
var sql = require('./db.js');

//Task object constructor
var Item = function (item) {
    this.item_id = item.item_id;
    this.item_name = item.item_name;
    this.category = item.category;
    this.building = item.building;
    this.location_area = item.location_area;
    this.count = item.count;
    this.item_value = item.item_value;
    this.description = item.description;
    this.person_found = item.person_found;
    this.person_claimed = item.person_claimed;
    this.date_found = item.date_found;
    this.date_claimed = item.date_claimed;
};
Item.createItem = function (newItem, result) {
    sql.query("INSERT INTO item set ?", newItem, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Item.getItemById = function (itemId, result) {
    sql.query("Select item_id, item_name, category, building, location_area, count1, item_value, description, person_found, person_claimed, location_found, location_claimed from item where id = ? ", itemId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Item.getAllTask = function (result) {
    sql.query("Select * from item", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('item : ', res);
            result(null, res);
        }
    });
};
Item.updateById = function (id, item, result) {
    sql.query("UPDATE item SET item_id = ? WHERE id = ?", [Item.item, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Item.remove = function (id, result) {
    sql.query("DELETE FROM item WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = Item;