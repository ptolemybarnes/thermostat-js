var Thermostat = function() { 
  var defaultStartingTemperature = 20
  var defaultMinimumBound = 10;
  var defaultMaximumBound = 35;

  this.temperature  = defaultStartingTemperature;
  this.minimumBound = defaultMinimumBound;
  this.maximumBound = defaultMaximumBound;
}

Thermostat.prototype.increaseTemperature = function() { 
  if (this.temperature + 1 > this.maximumBound) {
    throw("Temperature out of bounds");
  }

  this.temperature += 1;
}

Thermostat.prototype.decreaseTemperature = function() { 
  if (this.temperature - 1 < this.minimumBound) {
    throw("Temperature out of bounds");
  }
  this.temperature -= 1;
}

