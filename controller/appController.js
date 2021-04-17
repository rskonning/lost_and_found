'use strict';
var Item = require('../model/appModel.js');
exports.list_all_items = function (req, res) {
    Item.getAllTask(function (err, item) {
        console.log('controller')
        if (err) res.send(err);
        console.log('res', item);
        res.send(item);
    });
};
exports.create = function(req, res){
    res.render('homePageInsert3_30')
}
exports.create_a_item = function (req, res) {
    var new_item = new Item(req.body);
    // handles null error
    // if (!new_item.item_name) {
    //     res.status(400).send({error: true, message: 'Please provide proper information'});
    // } else {
    //     Item.createItem(new_item, function (err, item) {
    //         if (err) res.send(err);
    //         res.json(item);
    //     });
    // }
        Item.createItem(new_item, function (err, item) {
            if (err) res.send(err);
            res.json(item);
        });
};
exports.read_a_item = function (req, res) {
    Item.getItemById(req.params.itemid, function (err, item) {
        if (err) res.send(err);
        res.json(item);
    });
};
exports.update_a_item = function (req, res) {
    Item.updateById(req.params.itemid, new Item(req.body), function (err, item) {
        if (err) res.send(err);
        res.json(item);
    });
};
exports.delete_a_item = function (req, res) {
    Item.remove(req.params.itemid, function (err, item) {
        if (err) res.send(err);
        res.json({message: 'Item successfully deleted'});
    });
};
