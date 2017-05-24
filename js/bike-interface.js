var Bike = require('./../js/bike.js').bikeModule;

var bikeInfo = function(stolen_location, title, frame_colors, id, bikes) {
  bikes.forEach(function(bike) {
    var id = bike.id;
    console.log(id)
    // newBike.bikeId(id, locationInfo);
    // var locationInfo = function(latitude, longitude){
    //
    // }
    $('.output').append("<li>" + bike.stolen_location + " " + bike.title + " " + bike.frame_colors + "</li>");
  });
};

$(document).ready(function(){
  $('#bike-info').submit(function(event){
    event.preventDefault();
    $('.output').text("");
    var city = $('#city').val();
    var brand = $('#brand').val();
    var distance = $('#distance').val();
    var newBike = new Bike();
    newBike.getBike(city, brand, distance, bikeInfo);
  });
});
