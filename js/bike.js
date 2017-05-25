var apiKey = require('./../.env').apiKey;

function Bike() {
}

Bike.prototype.getBike = function(city, brand, distance, bikeInfo) {
  // $.get()
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=100&manufacturer=' + brand + '&location=' + city + '&distance=' + distance + '&stolenness=proximity')
  .then(function(response) {
    bikeInfo(response.bikes.stolen_location, response.bikes.title, response.bikes.frame_colors, response.bikes.id, response.bikes);
  })
  .fail(function(error){
    $('.output').text(error.responseJSON.message);
  });
};

Bike.prototype.bikeMap = function(ids) {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 45.5206297, lng: -122.6774804}
  });

  ids.forEach(function(id){
    $.get('https://bikeindex.org:443/api/v3/bikes/' + id)
    .then(function(id_response){
      // map { zoom: 14, center: {lat: id_response.bike.stolen_record.latitude, lng: id_response.bike.stolen_record.longitude}; }

      new google.maps.Marker({
        position: {lat: id_response.bike.stolen_record.latitude, lng:id_response.bike.stolen_record.longitude},
        map: map,
        icon: "images/a1.png"
      });
    });
  });
};

exports.bikeModule = Bike;
