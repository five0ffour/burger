// public/js/burger.js - front click event handling logic for User Inteface 

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    // Eat - move item to the devoured table
    $(".eat-btn").on("click", function (event) {
        var burger = {
            id : $(this).data("id")
        }

        console.log("Eat event for id: ", burger.id);

        // Send the POST request.
        $.ajax("/api/burgers/" + burger.id, {
            type: "PUT",
            data: burger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Delete - remove item from database
    $(".delete-btn").on("click", function (event) {
        var burger = {
            id : $(this).data("id")
        }

        console.log("Delete event for id: ", burger.id);

        // Send the POST request.
        $.ajax("/api/burgers/" + burger.id, {
            type: "DELETE",
            data: burger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Add - form entry POST event to add item to database
    $("#add-btn").on("click", function (event) {

        event.preventDefault();

        // Validation
        var burgerName =  $('input[name=burger-name]').val().trim();
        
        var burger = {
            burger_name: burgerName,
        }

        console.log("Add event for burger name: ", burger.burger_name + "\nEaten: " +  burger.devoured);

        // Send the POST request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: burger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});