// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

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

    $("#add-btn").on("click", function (event) {

        event.preventDefault();

        // Validation
        var burgerName =  $('input[name=burger-name]').val();
        
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