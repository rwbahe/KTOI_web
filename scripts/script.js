// dropdown logic
$(document).ready(function() {
    $("#menu").click(function() {
        if ( $("#dropdown").css("display") == "none" ) {
            $("#dropdown").css("display", "flex");
        }
        else {
            $("#dropdown").css("display", "none");
        }
    });
});