document.getElementById("h1").innerHTML = "NCL Map";
function initMap() {
    var center = {lat: 39.83333, lng: -98.58333};
    var map = new google.maps.Map(d3.select("#map").node(),{zoom:3, center:center});
}