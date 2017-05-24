var apiKey = require('./../.env').apiKey;

function Bike() {

}

Bike.prototype.getBike = function(city, brand, color, bikeInfo) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=50&manufacturer=' + brand + '&color=' + color + '&location=' + city + '&distance=1000&stolenness=proximity')
  .then(function(response) {
    bikeInfo(response.bikes[0].stolen_location, response.bikes[0].id);
  })
  .fail(function(error){
    $('.output').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
