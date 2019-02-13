// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".devour-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        //  alert("devour" + $(this).attr('data'));

        var id = $(this).attr('data');

        // Send the POST request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function() {
                console.log("changed burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".delete-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        //  alert("devour" + $(this).attr('data'));

        var id = $(this).attr('data');

        // Send the POST request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});