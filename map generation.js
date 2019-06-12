document.getElementById("h1").innerHTML = "NCL Map";


function initMap() {
    var center = {lat: 39.83333, lng: -98.58333};
    var map = new google.maps.Map(d3.select("#map").node(),{zoom:3, center:center});

    var overlay = new google.maps.OverlayView();
    
    var locations ='['+
      '{ "NYU":[ 40.7295, -73.9965, 1]}'+
      ']';
    var myJson = JSON.parse(locations)

    Object.keys(myJson[0]).forEach(function(key) {
        var latLng = {lat: myJson[0][key][0], lng: myJson[0][key][1]};
        var scalar = myJson[0][key][2]
        var marker = {
            position : latLng,
            map: map,
            draggable: false,
            icon: {
                path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
                fillColor: '#FF0000',
                fillOpacity: .5,
                anchor: new google.maps.Point(0,0), 
                strokeWeight: 0,
                scale: scalar
            },
            title : key                
        }
        var genMarker = new google.maps.Marker(marker);
    });
}