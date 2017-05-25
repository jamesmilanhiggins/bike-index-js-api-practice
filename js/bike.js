var apiKey = require('./../.env').apiKey;

function Bike() {
}

Bike.prototype.getBike = function(city, brand, distance, bikeInfo) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=50&manufacturer=' + brand + '&location=' + city + '&distance=' + distance + '&stolenness=proximity')
  .then(function(response) {
    bikeInfo(response.bikes.stolen_location, response.bikes.title, response.bikes.frame_colors, response.bikes.id, response.bikes);
  })
  .fail(function(error){
    $('.output').text(error.responseJSON.message);
  });
};

Bike.prototype.bikeId = function(ids, locationInfo) {

  lat_array = [];
  lon_array = [];

  ids.forEach(function(id){


    $.get('https://bikeindex.org:443/api/v3/bikes/' + id)


    .then(function(id_response){
      var lat = id_response.bike.stolen_record.latitude;
      var lon = id_response.bike.stolen_record.longitude;
      lat_array.push(lat);
      lon_array.push(lon);

      console.log(lat_array,lon_array);
      locationInfo(lat_array, lon_array, id_response.bikes);


      // console.log(id_response.bike.stolen_record.latitude);
    })
    .fail(function(error){
      $('.output').text(error.responseJSON.message);
    });
  });
};

exports.bikeModule = Bike;
