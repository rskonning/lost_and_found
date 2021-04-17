function updateIt( id, task, status ) {
    alert(`Update IT! ${id}`);
    let oStr = `<h2> Update of id:${id} </h2>`;
    oStr += `<input type='text' id='task' value='${task}'>`;
    oStr += `<input type='text' id='status' value='${status}'>`;
    oStr += `<td> <button type="button" class="btn btn-primary" onClick="sendTheUpdate(${id})">Update ${id} </button> </td>`;
    $("#results").html( oStr );
}
function sendTheUpdate(id) {
    alert(`SendTheUpdateIT! ${id}`)
    let task = $("task").val();
    let status = $("status").val();
    let URL = `http://127.0.0.1:3000/tasks/${id}`;
    let d = {
        task : `${task}`,
        status : `${status}`
    };
    $.ajax({
        url : URL,
        contentType : 'application/json',
        type : 'PUT',
        data : JSON.stringify( d ),
        success : function( data ) {
            let oStr = "<h2> Success </h2>" ;
            console.log(`Success`)
            console.log( data );
            alert("SUCCESS");
            window.location.reload();
        },
        error : function( xhr, status, error ) {
            alert( "Error");
            console.log(`AJAX ERROR`)
            console.log( error );
        }
    })
    // PUT with the ID -> 127.0.0.1:3000

}
function deleteIt( id ) {
    alert(`DELETE IT ${id}`)
    // This is the spot -> AJAX call to delete id=id
    // delete -> verb -> DELETE
    // tasks/id
    // ToDo: Need to error check the ID
    let URL = `http://127.0.0.1:3000/tasks/${id}`;
    alert(`URL:${URL}`);
    let oStr = "";
    $.ajax( {
        url : URL,
        contentType: 'application/json',
        type: "DELETE",
        success: function( data ){
            console.log( "SUCCESS" );
            console.log( data );
            // ToDo: add a cookie for this method
            oStr = `<span style="color:#ff0000"> ${data.message}</span>`
            $("#ajaxResults").html( oStr );
            alert("Success");
            window.location.reload();
        },
        error: function( xhr, status, error ) {
            alert("Error");
            console.log( "Error");
            window.location.reload();
        }
    })
}
// ToDo: Review to take this out
// function startIt(){
//     alert("CLCIK READY TO GO");
// }
$(document).ready(function() {
    alert("Document Loaded");
    // JS AJAX CODE HERE TO GET ALL THE TASKS
    let id=document.getElementById("taskArea");
    let URL = "http://127.0.0.1:3000/tasks"
    $.ajax({
        url: URL,
        headers: {'Access-Control-Allow-Origin':'*'}, // <-------- set this
        contentType: 'application/json',
        async: true,
        crossDomain : true,
        success : function( data ){
            let oStr = `<h2> Available Tasks </h2>`;
            oStr += "<table border='1'> ";
            oStr += `<tr><th>Id</th><th>Task</th><th>Status</th><th>Created</th></tr>`;
            alert("success");
            console.log(`data:`);
            console.log( data );
            for (let i=0; i<data.length; i++){
                let ti = data[i].id;
                let t = data[i].task;
                let s = data[i].status;
                let c = data[i].created_at;
                oStr += `<tr><td>${ti}</td><td>${t}</td><td>${s}</td><td>${c}</td>`;
                oStr += `<td> <button type="button" class="btn btn-primary" onClick="deleteIt(${ti})">Delete ${ti} </button> </td>`;
                oStr += `<td> <button type="button" class="btn btn-primary" onClick="updateIt(${ti}, '${t}', '${s}')">Update ${ti} </button> </td>`;
                oStr += `</tr>`;

            }
            oStr += `</table>`;
            id.innerHTML = oStr;
        },
        error : function( xhr, status, error ) {
            alert("Error");
        }

    })
    console.log(`URL:${URL}`);
});