$(document).ready(function(){
let addDateBtn = $(".add-date-btn");
//table datas
let fromDate = $(".from-date");
let toDate = $(".to-date");
let dateInfo = $(".date-info");
let form = $("#addRouteForm");

addDateBtn.click(function(e){
    e.preventDefault();

    $.validator.unobtrusive.parse(form);

    var dataArray = form.serializeArray(),
        dataObj = {};

    $(dataArray).each(function (i, field) {
        dataObj[field.name] = field.value;
    });

    function getData(dataValue){
        return dataObj[dataValue];
    }

    if (form.valid()){
        console.log(getData("fromDate"));
        console.log(getData("toDate"));
        console.log(getData("dateInfo"));
        
        fromRoute.attr("value", getData("fromDate"));
        toRoute.attr("value", getData("toDate"));
        routePrice.attr("value", `$${getData("dateInfo")}`);
    } 
    else {
        alert("poks");
    }
    });
});

let editDateBtn = $(".edit-date-btn");
let deleteDateBtn = $(".delete-date-btn");
let saveDateBtn = $(".save-date-btn");

function editDate(elem){
    $(elem).closest("tr").find(".availableDate").prop("contenteditable", true).css("color", "#007BFF");
    $(".dateInfoTextarea").prop("disabled", false).css("background-color", "white").css("border", "1px solid #007BFF");
}
function deleteDate(elem){
    $(elem).closest("tr").remove();
}
function saveDate(elem){
    $(elem).closest("tr").find(".availableDate").prop("contenteditable", false).css("color", "#000");
    $(".dateInfoTextarea").prop("disabled", true).css("background-color", "#F2F2F2").css("border", "none");
}