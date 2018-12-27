// burgers.js - business logic for our app (CRUD) 
//            -  calls the ORM with the appropriate interfaces (examples shown below)
var orm = require("../config/orm.js");

var burger = {

    // ALL - no parms needed
    all : (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },

    // INSERT
    // var columns = [ "burger_name", "devoured"];
    // var values = [ "Robin's Nest", true ];
    insert: (columns, values, cb) => {
        orm.insert("burgers", columns, values, (res) => {
            cb(res);
        });
    },

    // UPDATE
    // var objKeyPair = { "burger_name" : "Bacon Cheese Burger",
    //                   "devoured" : false };
    // var condition = "id = 13";
    update: (burgerObj, cb) => {
        var values = { "devoured" : burgerObj.devoured };
        var condition = [{
            id: burgerObj.id
        }];
        orm.update("burgers", values, condition, (res) => {
            cb(res);
        });
    },

    // DELETE
    // var condition = "id = 13"
    delete: (burgerObj, cb) => {
        var condition = [{
            id: burgerObj.id
        }];
        orm.delete("burgers", condition, (res) => {
            cb(res);
        });
    }

}

module.exports = burger;