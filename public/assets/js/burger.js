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

});