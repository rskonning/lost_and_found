$(document).ready(function() {
    alert("READY");
});
function itemSearch(criteria){
    alert("Searching!");


    let id=document.getElementById("itemArea");
    let URL = "http://127.0.0.1:3000/item";
    $.ajax({
        url: URL,
        headers: {'Access-Control-Allow-Origin':'*'}, // <-------- set this
        contentType: 'application/json',
        async: true,
        crossDomain : true,
        success : function( data ){
            let oStr = `<h2> Lost And Found Items </h2>`;
            oStr += "<table border='1'> ";
            oStr += `<tr><th>itemId</th><th>item</th><th>Category</th><th>Building</th><th>locationArea</th><th>count</th><th>description</th><th>person_found</th><th>person_claimed</th><th>date_found</th><th>date_claimed</th></tr>`;
            alert("success");
            console.log(`data:`);
            console.log( data );
            for (let i=0; i<data.length; i++){
                let iId = data[i].item_id;
                let item = data[i].item_name;
                let cat = data[i].category;
                let B = data[i].building;
                let L = data[i].location_area;
                let count = data[i].count1;
                let desc = data[i].description;
                let pFound = data[i].person_found;
                let pClaimed = data[i].person_claimed;
                let dFound = data[i].date_found;
                let dClaimed = data[i].date_claimed;
                oStr += `<tr><td>${iId}</td><td>${item}</td><td>${cat}</td><td>${B}</td><td>${L}</td><td>${count}</td><td>${desc}</td><td>${pFound}</td><td>${pClaimed}</td><td>${dFound}</td><td>${dClaimed}</td>`;
                oStr += `<td> <button type="button" class="btn btn-primary" onClick="deleteIt(${item})">Delete ${item} </button> </td>`;
                oStr += `<td> <button type="button" class="btn btn-primary" onClick="updateIt(${item}, '${pClaimed}', '${dClaimed}')">Update ${item} </button> </td>`;
                oStr += `</tr>`;

            }
            oStr += `</table>`;
            id.innerHTML = oStr;
        },
        error : function( xhr, status, error ) {
            alert("Error");
        }

    })
}