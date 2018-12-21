var connection = require("./config/connection.js");
var orm = require("./config/orm.js");

var table = "burgers";

orm.all(table, (data) => {
    console.log("--------------------GET Burgers--------------------");
    console.log(data);
});

var columns = [ "burger_name", "devoured"];
var values = [ "Robin's Nest", true ];
orm.insert(table, columns, values, (data) => {
    console.log("--------------------INSERT Burger--------------------");
    console.log("Model Insert - affected row count: ", data);
});

var objKeyPair = { "burger_name" : "Bacon Cheese Burger",
                  "devoured" : false };
var condition = "id = 13";
orm.update(table, objKeyPair, condition, (data) => {
    console.log("--------------------UPDATE Burger--------------------");
    console.log("Model Update -  affected row count: ", data);
});


var condition = [{ "burger_name" : "Robin's Nest"}];
orm.delete(table, condition, (data) => {
    console.log("--------------------DELETE Burger--------------------");
    console.log("Model Delete - affected row count: ", data);
});




