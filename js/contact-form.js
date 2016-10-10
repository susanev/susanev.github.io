/*  when submit button clicked
    check that every field is filled in
    and that email contains @
*/
function checkValues() {
    return checkAllValues();
}

function checkValue(id) {
    if($(id).attr("class") == "error-border" && $(id).val() != ""){
        $(id).removeClass("error-border");
        $(id).addClass("reset-border");
    }
    else {
        $(id).addClass("error-border");
        $(id).removeClass("reset-border");
    }
    
    checkAllValues();
}

function checkAllValues() {
    var elements = [$("#contact-name"), $("#contact-email"), $("#contact-msg")];
    
    var empty = 0;
    for (var i=0; i<elements.length; i++) {
        if(elements[i].val() == ""){
            elements[i].addClass("error-border");
            empty++;
        }
        else {
            elements[i].removeClass("error-border");
            elements[i].addClass("reset-border");
        }
    }
        
    if(empty == 0){
        $("#user-msg").hide();
        return true;
    }

    else {   
        $("#user-msg").text("Please fill in all of the fields");;
        $("#user-msg").show();
        return false;
    }
}

window.onload = function() {
    $("#user-msg").hide();
}