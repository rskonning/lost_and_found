$(document).ready(function() {
    //alert("Document Loaded");
    // JS AJAX CODE HERE TO GET ALL THE TASKS
    let id=document.getElementById("itemArea");
    let URL = "http://127.0.0.1:3333/item" //ToDo: get correct URL
    $.ajax({
        url: URL,
        headers: {'Access-Control-Allow-Origin':'*'}, // <-------- set this
        contentType: 'application/json',
        async: true,
        crossDomain : true,
        success : function( data ){
            let oStr = `<h2> Lost And Found Items </h2>`;
            oStr += "<table border='1'> ";
            oStr += `<tr><th>itemId</th><th>item</th><th>Category</th><th>Building</th><th>locationArea</th><th>count</th><th>Value</th><th>description</th><th>person_found</th><th>person_claimed</th><th>date_found</th><th>date_claimed</th></tr>`;
            //alert("success");
            console.log(`data:`);
            console.log( data );
            console.log(data.length);
            for (let i=0; i<data.length; i++){
                let iId = data[i].item_id;
                let item = data[i].item_name;
                let cat = data[i].category;
                let B = data[i].building;
                let L = data[i].location_area;
                let count = data[i].count;
                let v = data[i].item_value;
                let desc = data[i].description;
                let pFound = data[i].person_found;
                let pClaimed = data[i].person_claimed;
                let dFound = data[i].date_found;
                let dClaimed = data[i].date_claimed;
                oStr += `<tr><td>${iId}</td><td>${item}</td><td>${cat}</td><td>${B}</td><td>${L}</td><td>${count}</td><td>${v}</td><td>${desc}</td><td>${pFound}</td><td>${pClaimed}</td><td>${dFound}</td><td>${dClaimed}</td>`;
                oStr += `<td> <form action="/item/${iId}/delete" method="get"> <button type="submit" class="btn btn-primary">Delete ${item} </button> </form> </td>`;
                oStr += `<td> <form action="/item/${iId}" method="get"> <button type="submit" class="btn btn-primary">Update ${item} </button> </form> </td>`;
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