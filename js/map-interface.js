var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  var pdx = {lat: 45.5206297, lng: -122.6774804};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: pdx
  });
  var marker = new google.maps.Marker({
    position: pdx,
    map: map,
    icon: "images/a1.png"
  });
  // styles: [
  //   {
  //     stylers: [
  //       { hue: "#00ff6f" },
  //       { saturation: -50 }
  //     ]
  //   }, {
  //     featureType: "road",
  //     elementType: "geometry",
  //     stylers: [
  //       { lightness: 100 },
  //       { visibility: "simplified" }
  //     ]
  //   }, {
  //     featureType: "transit",
  //     elementType: "geometry",
  //     stylers: [
  //       { hue: "#76FF92" },
  //       { saturation: +80 }
  //     ]
  //   }, {
  //     featureType: "transit",
  //     elementType: "labels",
  //     stylers: [
  //       { hue: "#ff0066" },
  //       { saturation: +80 }
  //     ]
  //   }
  // ];
});
