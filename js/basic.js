var displayNav = false;

/* toggles the hamburger menu when clicked */
function toggleNav() { 
    $('#mainNav').toggle();
    
    if(displayNav){
        $('#line1').attr('class', 'no-rotate');
        $('#line2').attr('class', 'no-rotate');
        $('#line3').attr('class', 'no-rotate');
        displayNav = false;
    }
    else {
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

window.onload = function() {
    // stuff to happen after load
};

// google analytics code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-84803201-1', 'auto');
ga('send', 'pageview');