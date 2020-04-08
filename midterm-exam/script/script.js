window.addEventListener("load", () => {

    event.preventDefault();

    let tr = document.createElement("Tr");
    $('#list-table tr:last').after("<tr><td>1234567890</td><td>123-45-6789</td><td>Anna H. Smith</td><td>New Mexico</td><td>Yes</td></tr>");
    $('#list-table tr:last').after("<tr><td>1234567891</td><td>123-45-6788</td><td>Bob J. Harrison</td><td>Arizona</td><td>No</td></tr>");

    
    document.getElementById("census-form").addEventListener("submit", (event) => {
        event.preventDefault();

        let tr = document.createElement("Tr");
        $('#list-table tr:last').after("<tr><td>" + document.getElementById("citizen-id").value
            + "</td><td>" + document.getElementById("ssn").value
            + "</td><td>" + document.getElementById("fullname").value
            + "</td><td>" + document.getElementById("state").value
            + "</td><td>" + $("input[name='seniorCitizen']:checked").val()
            + "</td></tr>");
    });
});



