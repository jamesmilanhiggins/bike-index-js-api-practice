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

// Bike.prototype.bikeId = function(id, locationInfo) {
//   $.get('https://bikeindex.org:443/api/v3/bikes/' + id)
//   .then(function(id_response){
//     locationInfo(id_response.bike.stolen_record.latitude, id_response.bike.stolen_record.longitude);
//   })
//   .fail(function(error){
//     $('.output').text(error.responseJSON.message);
//   });
// };

exports.bikeModule = Bike;
