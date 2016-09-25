var displayNav = false;

function showNav() {
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");
    
    if(displayNav){
        $('#mainNav').hide();
        $('#line1').attr('class', 'no-rotate');
        $('#line2').attr('class', 'no-rotate');
        $('#line3').attr('class', 'no-rotate');
        displayNav = false;
    }
    else {
       $('#mainNav').show();
        $('#line1').attr('class', 'line1-rotate');
        $('#line2').attr('class', 'line2-rotate');
        $('#line3').attr('class', 'line3-rotate');
        displayNav = true;

    }
}

$(window).resize(function() {
    if($(window).width() > 973){
        $('#mainNav').show();
        displayNav = false;
    }else if(!displayNav){
        $('#mainNav').hide();
        $('#line1').attr('class', 'no-rotate');
        $('#line2').attr('class', 'no-rotate');
        $('#line3').attr('class', 'no-rotate');
    }
});
