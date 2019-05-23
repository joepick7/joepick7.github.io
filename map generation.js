document.getElementById("h1").innerHTML = "NCL Map";
function initMap() {
    var center = {lat: 39.83333, lng: -98.58333};
    var map = new google.maps.Map(d3.select("#map").node(),{zoom:3, center:center});
};
d3.json("locations.json", function(error, data) {
    if (error) throw error;

    var overlay = new google.maps.OverlayView();
  
    // Add the container when the overlay is added to the map.
    overlay.onAdd = function() {
      var layer = d3.select(this.getPanes().overlayLayer).append("div")
          .attr("class", "locations");
  
      // Draw each marker as a separate SVG element.
      overlay.draw = function() {
        var projection = this.getProjection(),
            padding = 10;
  
        var marker = layer.selectAll("svg")
            .data(d3.entries(data))
            .each(transform) // update existing markers
          .enter().append("svg")
            .each(transform)
            .attr("class", "marker");
  
        // Add a circle.
        marker.append("representation")
        function transform(d) {
          d = new google.maps.LatLng(d.value[0], d.value[1]);
          d = projection.fromLatLngToDivPixel(d);
          return d3.select(this)
              .style("left", (d.x - padding) + "px")
              .style("top", (d.y - padding) + "px");
        }
      };
    };
  
    // Bind our overlay to the map…
    overlay.setMap(map);
})