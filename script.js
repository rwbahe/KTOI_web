// dropdown menu logic
function showMenu() {
    let menu = document.getElementById("menu");
    let dropdown = document.getElementById("dropdown");

    if (dropdown.style.opacity == 0) {
        dropdown.style.transition = "opacity 1s";
        dropdown.style.opacity = 1;
        dropdown.style.zIndex = 1;
        menu.style.backgroundImage = "url(icons/cancel_36x36.svg)"
    }
    else {
        dropdown.style.opacity = 0;
        dropdown.style.zIndex = -1;
        menu.style.backgroundImage = "url(icons/menu_36x36.svg)"
    }
}


// greeting change logic
function changeToCovenant() {
    let elemGreeting = document.getElementById("banner-greeting");
    let elemCovenant = document.getElementById("banner-covenant");

    elemGreeting.style.transition = "opacity 1s";
    elemGreeting.style.opacity = "0";

    elemCovenant.style.transition = "opacity 1s";
    elemCovenant.style.opacity = "1";
}

function changeToGreeting() {
    let elemGreeting = document.getElementById("banner-greeting");
    let elemCovenant = document.getElementById("banner-covenant");

    elemGreeting.style.transition = "opacity 1s";
    elemGreeting.style.opacity = "1";


    elemCovenant.style.transition = "opacity 1s";
    elemCovenant.style.opacity = "0";
}