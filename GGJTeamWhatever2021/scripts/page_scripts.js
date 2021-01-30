
let radius = 20;
let myLocation = document.getElementById("mylocation");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        myLocation.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {

    let distance = GreatCircle.distance(40.26392, -76.88929, position.coords.latitude, position.coords.longitude, "FT");

    if (distance < radius) {
        myLocation.innerHTML = "<a href=\"ymca.html\">Click Here</a>.";
    } else {
        myLocation.innerHTML = "You are " + distance + " feet away.";
    }
}
