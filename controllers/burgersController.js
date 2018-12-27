// burgerController.js - registers the HTTP endpoints with the express router:
//     /                   - GET - return all burgers from the database
//     /api/burgers/:id    - PUT - update a specfic burger in the database
//     /api/burgers/:id    - DELETE - removes a specific burger from the database
//     /api/burgers        - POST - add a burger to the dataase
//   (See README.md for parameter details)

var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    console.log("GET Called");
    burger.all((data) => {
        var burgersData = {
            burgers: data
        };
        console.log("--------- GET ----------");
        console.log(burgersData);
        res.render("index", burgersData);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    console.log("PUT Called: ", req.params.id);
    var burgerObj = { "id" : req.params.id,
                      "devoured" : true };
    burger.update(burgerObj, (data) => {
        var burgersData = {
            burgers: data
        };
        console.log("--------- PUT ----------");
        console.log(burgersData);
        res.render("index", burgersData);
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    console.log("DELETE Called: ", req.params.id);
    var burgerObj = { "id" : req.params.id };
    burger.delete(burgerObj, (data) => {
        var burgersData = {
            burgers: data
        };
        console.log("--------- DELETE ----------");
        console.log(burgersData);
        res.render("index", burgersData);
    });
});

router.post("/api/burgers/", function (req, res) {
    console.log("POST Called ");

    var columns = ["burger_name", "devoured"];
    var values = [ req.body.burger_name, req.body.devoured ];
    console.log("values = [" + values + "]");
    burger.insert(columns, values, (burgersData) => {
        console.log("--------- POST ----------");
        res.json({ id: burgersData.insertId });
    });
});



// Export routes for server.js to use.
module.exports = router;