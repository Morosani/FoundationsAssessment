var Vehicle = function(plate,color){
  this.licensePlate = plate;
  this.color = color;
}
 
Vehicle.prototype.changeColor = function(newColor){
  this.color = newColor;
}

Vehicle.prototype.beep = function(){
  return "BEEP, BEEP"
}

var Truck = function(plate,color,transmission){
  this.licensePlate = plate;
  this.color = color;
  this.transmission = transmission;
}

Truck.prototype = Object.create(Vehicle.prototype);