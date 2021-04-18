var Item = require("../model/itemModel");
var Person = require("../model/personModel");

// get all items
exports.getAll = function(req, res) {
    Item.getAll(function(err, items){
        Person.getAll(function(err3, people){
            data = {
                items : items, 
                people : people
            }
            res.render('guest', data);
        });
    });
};

// leads to item update form
exports.getItem = function(req, res){
    Item.getByID(req.params.id, function(err, item){
        Person.getAll(function(er2, people){
            data = {
                item : item[0],
                people : people
            }
            if(req.session.admin == true){
                res.render('updateItem', data);
            } else {
                res.redirect('/login');
            }
        });
    });
};


// update item
exports.updateItem = function(req, res){
    Item.updateByID(req.params.id, new Item(req.body), function (err, item) {
        if (err) res.send(err);
        res.redirect('/item');
    });
};

// delete form
exports.deleteForm = function(req, res){
    Item.getByID(req.params.id, function(err, item){
        data = {
            item : item[0],
            id : req.params.id
        }
        if(req.session.admin == true){
            res.render('deleteItem', data);
        } else {
            res.redirect('/login');
        }
    });
};

// delete item
exports.deleteItem = function(req, res){
    Item.remove(req.params.id, function (err, item) {
        if (err) res.send(err);
        res.redirect('/item');
    });
};