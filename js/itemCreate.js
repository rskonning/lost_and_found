$(document).ready(function() {
    alert("READY");
});
function insertNew() {
    alert("CLICK NEW ");
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    // the code that will ajax call to insert stuff
    let item_name = $("#item_name").val();
    let category = $("#category").val();
    //let item_id = $("#item_id").val();
    let building = $("#building").val();
    let location_area = $("#location_area").val();
    let count = $("#count").val();
    let description = $("#description").val();
    let person_found = $("#person_found").val();
    let date_found = today;
    //ToDo: add error checking
    //alert(`t:${item} s:${category}`);
    // Use AJAX to call back-end
    // POST to 127.0.0.1:3000 -> BODY task and status in ajax
    let URL = "http://127.0.0.1:3000/item" //ToDo: change later to be correct URL
    let d = {
        //item_id : `${item_id}`,
        item_name : `${item_name}`,
        category : `${category}`,
        building : `${building}`,
        location_area : `${location_area}`,
        count : `${count}`,
        description : `${description}`,
        person_found : `${person_found}`,
        person_claimed : null,
        date_found : `${date_found}`,
        date_claimed : null

    };
    $.ajax({
        url : URL,
        contentType : 'application/json',
        type : 'POST',
        data : JSON.stringify( d ),
        success : function( data ) {
            let oStr = "<h2> Success </h2>" ;
            console.log(`Success`)
            console.log( data );
        },
        error : function( xhr, status, error ) {
            alert( "Error");
            console.log(`AJAX ERROR`)
            console.log( error );
        }
    })
}