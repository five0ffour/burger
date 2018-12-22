var orm = require("../config/orm.js");

// var cat = {
//     all: function (cb) {
//       orm.all({ table : "cats" }, function (res) {
//         cb(res);
//       });
//     },

var burger = {

    all : (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },


    // var columns = [ "burger_name", "devoured"];
    // var values = [ "Robin's Nest", true ];
    insert: (columns, values, cb) => {
        orm.insert("burgers", columns, values, (res) => {
            cb(res);
        });
    },

    // var objKeyPair = { "burger_name" : "Bacon Cheese Burger",
    //                   "devoured" : false };
    // var condition = "id = 13";
    update: (burgerObj) => {
        var condition = [{
            id: burgerObj.id
        }];
        orm.update("burgers", burgerObj, condition, (res) => {
            cb(res);
        });
    },


    // var condition = [{ "burger_name" : "Robin's Nest"}];
    delete: (burgerId, cb) => {
        var condition = [{
            id: burgerId
        }];
        orm.delete("burger", condition, (res) => {
            cb(res);
        });
    }

}

module.exports = burger;