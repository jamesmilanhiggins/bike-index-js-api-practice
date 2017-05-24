var Bike = require('./../js/bike.js').bikeModule;

var bikeInfo = function(stolen_location, id) {
  $('.output').append("<li>" + stolen_location + id + "</li>");
};

$(document).ready(function(){
  $('#bike-info').submit(function(event){
    event.preventDefault();
    var city = $('#city').val();
    var brand = $('#brand').val();
    var color = $('#color').val();
    var newBike = new Bike();
    newBike.getBike(city, brand, color, bikeInfo);
  });
});
