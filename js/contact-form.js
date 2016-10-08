/*  when submit button clicked
    check that every field is filled in
    and that email contains @
*/
function checkValues() {
    return checkAllValues();
}

function checkValue(element) {
    if(element.style.getPropertyValue('border-color') == "rgb(255, 0, 0)" && element.value != ""){
        formElementReset(element);
    }
    
    checkAllValues();
}

function checkAllValues() {
    var elements = [document.getElementById("contact-name"), document.getElementById("contact-email"), document.getElementById("contact-msg")];
    
    var empty = 0;
    for (var i=0; i<elements.length; i++) {
        if(elements[i].value == ""){
            elements[i].style.borderColor = "#ff0000";
            elements[i].style.borderWidth = "2px"
            empty++;
        }
        else {
            formElementReset(elements[i]);
        }
    }
    
    if(empty == 0){
        document.getElementById("user-msg").style.display = "none";
        return true;
    }

    else {        
        document.getElementById("user-msg").textContent = "Please fill in all of the fields";
        document.getElementById("user-msg").style.display = "block";
        return false;
    }
}

function formElementReset(element) {
    element.style.borderColor = "#dedede";
    element.style.borderWidth = "1px";
}

window.onload = function() {
    document.getElementById("user-msg").style.display = "none";
}