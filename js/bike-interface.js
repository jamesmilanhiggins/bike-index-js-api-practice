var Bike = require('./../js/bike.js').bikeModule;
var ids = [];
// console.log(ids2)

var bikeInfo = function(stolen_location, title, frame_colors, id, bikes) {
  bikes.forEach(function(bike) {
    var id = bike.id;
    ids.push(id);
    $('.output').append("<li>" + bike.stolen_location + " " + bike.title + " " + bike.frame_colors + "</li>");
  });
};


$(document).ready(function(){
  var newBike = new Bike();
  $('#bike-info').submit(function(event){
    event.preventDefault();
    $('.output').text("");
    var city = $('#city').val();
    var brand = $('#brand').val();
    var distance = $('#distance').val();
    newBike.getBike(city, brand, distance, bikeInfo);
  });
  $('#add-map').click(function(){

      newBike.bikeMap(ids);
  });
});
