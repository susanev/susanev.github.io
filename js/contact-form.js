/*  when submit button clicked
    check that every field is filled in
    and that email contains @
*/
function checkValues() {
    return checkAllValues();
}

function checkValue(element) {
    if($(element).hasClass("error-border") && $(element).val() != ""){
        $(element).removeClass("error-border");
        $(element).addClass("reset-border");
        checkAllValues();
    }

    else if(!$(element).hasClass("error-border") && $(element).val() == ""){
        $(element).addClass("error-border");
        $(element).removeClass("reset-border");
    }
}

function checkAllValues() {
    var elements = $(".form-field");

    var empty = 0;
    for (var i=0; i<elements.length; i++) {
        if($(elements[i]).val() == ""){
            $(elements[i]).addClass("error-border");
            empty++;
        }
        else {
            $(elements[i]).removeClass("error-border");
            $(elements[i]).addClass("reset-border");
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