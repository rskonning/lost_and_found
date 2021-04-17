'use strict';
module.exports = function (app) {
    var itemList = require('../controller/appController');
// todoList Routes
    app.route('/item')
        .get(itemList.list_all_items)
        .post(itemList.create_a_item);

    app.route('/item/create')
        .get(itemList.create);

    app.route('/item/:itemid')
        .get(itemList.read_a_item)
        .put(itemList.update_a_item)
        .delete(itemList.delete_a_item);
};
