// dropdown logic
$(document).ready(function() {
    $("#menu").click(function() {
        if ( $("#dropdown").css("display") == "none" ) {
            $("#dropdown").css("display", "flex");
            $("#menu").css("background-image", "url(icons/menu-cancel_36x36.svg)");
        }
        else {
            $("#dropdown").css("display", "none");
            $("#menu").css("background-image", "url(icons/menu-bar_36x36.svg)");
        }
    });
});