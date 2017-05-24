var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  var pdx = {lat: 45.5461, lng: -122.6767};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: pdx
  });
  var marker = new google.maps.Marker({
    position: pdx,
    map: map
  });
});
