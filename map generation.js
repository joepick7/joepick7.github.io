document.getElementById("h1").innerHTML = "NCL Map";
function initMap() {
    var kokomo = {lat: 40.4864, lng: -86.1336};
    var map = new google.maps.Map(d3.select("#map").node(),{zoom:15, center:kokomo});
}