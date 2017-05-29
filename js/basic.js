$(document).ready(function() {
	$('#ride').click(function() {
		window.location.href= './projects/ride.html';
	});

	$('#safer-conception').click(function() {
		window.location.href= './projects/conception-tracking.html';
	});
});

var displayNav = false;

/* toggles the hamburger menu when clicked */
function toggleNav() { 
    $('#mainNav').toggle();
    
    if(displayNav){
        $('#line1').attr('class', 'no-rotate');
        $('#line2').attr('class', 'no-rotate');
        $('#line3').attr('class', 'no-rotate');
        $('#menuText').show();
        displayNav = false;
    }
    else {
        $('#menuText').hide();
        $('#line1').attr('class', 'line1-rotate');
        $('#line2').attr('class', 'line2-rotate');
        $('#line3').attr('class', 'line3-rotate');
        displayNav = true;
    }
}

/*  if window resized to bigger than 973
    remove hamburger; else show hamburger
*/
$(window).resize(function() {
    if ($(window).width() > 973) {
        $('#mainNav').show();
        displayNav = false;
    } else if(!displayNav) {
        $('#mainNav').hide();
        $('#line1').attr('class', 'no-rotate');
        $('#line2').attr('class', 'no-rotate');
        $('#line3').attr('class', 'no-rotate');
    }
});

window.onload = function() {
    // stuff to happen after load
};

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

// google analytics code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-84803201-1', 'auto');
ga('send', 'pageview');