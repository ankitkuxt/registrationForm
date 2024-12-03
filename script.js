$(document).ready(function () {
    $("#registrationForm").submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Serialize form data
        let formData = $(this).serialize();

        // Send data to the PHP file
        $.post("submit.php", formData, function (response) {
            $("#successMessage").html(response).show(); // Display the response
            $("#registrationForm")[0].reset(); // Reset the form
        });
    });
});
