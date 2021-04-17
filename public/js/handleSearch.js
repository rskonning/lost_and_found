rows = $("#table");
console.log(rows);

function search(){
    item_name = $("#item_name").val();
    console.log(item_name);
    category = $("#category").val();
    building = $("#building").val();
    date_found = $("#date_found").val();
    if(item_name != ""){
        find(item_name, 0);
    }
    if(category != ""){
        find(category, 1);
    }
    if(building != ""){
        find(building, 2);
    }
    if(date_found != "" || date_found != null){
        find(date_found, 8);
    }
}

function find(search_val, col){
    var result;
    console.log(rows);
    for(i=0; i < rows; i++){
        row = $(`#${i}`);
        console.log(row);
    }
}