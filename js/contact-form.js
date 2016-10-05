/*  when submit button clicked
    check that every field is filled in
    and that email contains @
*/
function checkValues() {
    var elements = [document.getElementById("contact-name"), document.getElementById("contact-email"), document.getElementById("contact-msg")];
    
    var empty = 0
    for(var i=0; i<elements.length; i++){
        if(elements[i].value == ""){
            elements[i].style.borderColor = "#ff0000";
            elements[i].style.borderWidth = "2px"
            empty++;
        }
        else {
            elements[i].style.borderColor = "#dedede";
            elements[i].style.borderWidth = "1px"
        }
    }
    
    if(empty == 0){
        return true;
    }

    else {        
        document.getElementById("user-msg").textContent = "Please fill in all of the fields";
        document.getElementById("user-msg").style.display = "block";
        return false;
    }
}

window.onload = function() {
    document.getElementById("user-msg").style.display = "none";
}