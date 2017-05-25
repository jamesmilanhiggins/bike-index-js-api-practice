var apiKey = require('./../.env').apiKey;

function Bike() {
}

Bike.prototype.getBike = function(city, brand, distance, bikeInfo, cityCoordinate) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=100&manufacturer=' + brand + '&location=' + city + '&distance=' + distance + '&stolenness=proximity')
  .then(function(response) {
    bikeInfo(response.bikes.stolen_location, response.bikes.title, response.bikes.frame_colors, response.bikes.id, response.bikes);
  });
  // .fail(function(error){
  //   $('.output').text(error.responseJSON.message);
  // });
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city)
  .then(function(response1){
    var cityCoord = {lat: response1.results[0].geometry.location.lat, lng: response1.results[0].geometry.location.lng};

    cityCoordinate(cityCoord);

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: cityCoord,
      styles: [
        {
          stylers: [
            { hue: "#00ff6f" },
            { saturation: -50 }
          ]
        }, {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            { lightness: 100 },
            { visibility: "simplified" }
          ]
        }, {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            { hue: "#76FF92" },
            { saturation: +80 }
          ]
        }, {
          featureType: "transit",
          elementType: "labels",
          stylers: [
            { hue: "#ff0066" },
            { saturation: +80 }
          ]
        }
      ]
    });
  });
  // .fail(function(error){
  //   $('.output').text(error.responseJSON.message);
  // });
};

Bike.prototype.bikeMap = function(ids, coordinates) {
  var cityCoordinates = coordinates[0];
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: cityCoordinates,
    styles: [
      {
        stylers: [
          { hue: "#00ff6f" },
          { saturation: -50 }
        ]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" }
        ]
      }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          { hue: "#76FF92" },
          { saturation: +80 }
        ]
      }, {
        featureType: "transit",
        elementType: "labels",
        stylers: [
          { hue: "#ff0066" },
          { saturation: +80 }
        ]
      }
    ]
  });

  ids.forEach(function(id){
    $.get('https://bikeindex.org:443/api/v3/bikes/' + id)
    .then(function(id_response){

      var marker = new google.maps.Marker({
        position: {lat: id_response.bike.stolen_record.latitude, lng:id_response.bike.stolen_record.longitude},
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        icon: "images/a1.png"


      });
      marker.addListener('click', toggleBounce);

      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
    });
  });
};

exports.bikeModule = Bike;
