var base = "http://www.susanrevans.com"

$(document).ready(function() {
    $('#digital-asset-management').click(function() {
        window.location.href= base + '/projects/digital-asset-management.html';
    });
    $('#digital-asset-management').keypress(function() {
        window.location.href= base + '/projects/digital-asset-management.html';
    });
    $('#health-insurance-viz').click(function() {
        window.location.href= base + '/projects/health-insurance-visualizations.html';
    });
    $('#health-insurance-viz').keypress(function() {
        window.location.href= base + '/projects/health-insurance-visualizations.html';
    });
    $('#claim-table-design').click(function() {
        window.location.href= base + '/projects/claim-table-design.html';
    });
    $('#claim-table-design').keypress(function() {
        window.location.href= base + '/projects/claim-table-design.html';
    });
    $('#conception-tracking').click(function() {
        window.location.href= base + '/projects/conception-tracking.html';
    });
    $('#conception-tracking').keypress(function() {
        window.location.href= base + '/projects/conception-tracking.html';
    });
	$('#autonomous-vehicle-system').click(function() {
		window.location.href= base + '/projects/autonomous-vehicle-system.html';
	});
    $('#autonomous-vehicle-system').keypress(function() {
        window.location.href= base + '/projects/autonomous-vehicle-system.html';
    });
    $('#art-guide').click(function() {
        window.location.href= base + '/projects/art-guide.html';
    });
    $('#art-guide').keypress(function() {
        window.location.href= base + '/projects/art-guide.html';
    });
    $('#ruby-curriculum').click(function() {
        window.location.href= base + '/projects/ruby-curriculum-development.html';
    });
    $('#ruby-curriculum').keypress(function() {
        window.location.href= base + '/projects/ruby-curriculum-development.html';
    });
    $('#ecommerce').click(function() {
        window.location.href= base + '/projects/e-commerce-interaction-design.html';
    });
    $('#ecommerce').keypress(function() {
        window.location.href= base + '/projects/e-commerce-interaction-design.html';
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