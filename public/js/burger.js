// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
        $(".create-form").on("submit", function(event) {
                // Make sure to preventDefault on a submit event.
                event.preventDefault();

                var newBurger = {
                    burger_name: $("#ca").val().trim(),
                    devoured: false
                };


                // Send an AJAX POST-request with jQuery
                $.post("/api/burgers/new", newBurger)
                    // On success, run the following code
                    .then(function(data) {
                        location.reload();
                    });
                // Empty each input box by replacing the value with an empty string
                name: $("#ca").val().trim(),
                    $("#ca").val("");
            }
        });
}