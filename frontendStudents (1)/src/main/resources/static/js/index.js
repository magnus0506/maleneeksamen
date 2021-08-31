
    let id;

    //listens for click on all elements with the class "deletebtn"
    //preventDefault prevents execution of event
    $(document).on('click', ".deletebtn", function (e) {
    e.preventDefault();
    const test = window.confirm("Confirm deletion?")

    //takes the closest item
    if (test) {
    $(this).closest('tr').remove();

    //det skal åbenbart være id her ligemeget hvad man har kaldt id'et i backend
    id = $(this).data('id');

    console.log(id)
    $.ajax({
    url: "http://localhost:8080/students/" + id,
    type: 'delete',
    success: function (data) {
    console.log(data)
},
    error: function (data) {
    console.log("error: " + data)
}
})
}
});

    $(document).on('click', ".editbtn", function (e) {
        var table = $(this).closest('tr')[0]
        var st = $(this).data('studentId')
        console.log(table + st)
    e.preventDefault();
    // const email = $(this).data('studentId');
    // console.log(studentId)
    // window.location.replace("http://localhost:8080/students/updatestudent/" + studentId);
});

    $(function () {
    $.ajax({
        //takes url (backend) and loads it into frontend

        url: "http://localhost:8080/students",
        success: function (result) {
            console.log(result)
            let tableRows = "";
            $.each(result, function (key, val) {
                tableRows += "<tr>";
                tableRows +=
                    "<td>" + val["studentId"] +
                    "</td><td>" + val["name"] +
                    "</td><td>" + val["email"] +

                    "</td><td>" +
                    "<input type='image' src='https://icon-library.com/images/delete-button-icon/delete-button-icon-17.jpg' style='width:20px' alt='Delete' id='img' " +
                    "class='deletebtn' data-id='" + val["studentId"] + "'>" +
                    "</td><td>" +
                    "<input  type='image' src='https://icon-library.com/images/edit-button-icon/edit-button-icon-24.jpg' style='width:20px' alt='Edit' id='img' " +
                    "class='editbtn' data-id='" + val["studentId"] + "'></td>";


            });
            tableRows += "</tr>";
            $('#tbl tbody').html(tableRows)
        }
    })
})

