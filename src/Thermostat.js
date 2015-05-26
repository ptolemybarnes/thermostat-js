var Thermostat = function() { 
  this.temperature = Thermostat.defaultStartingTemperature;
}

Thermostat.prototype.increaseTemperature = function() { 
  this.temperature += 1;
}

Thermostat.prototype.decreaseTemperature = function() { 
  if (this.temperature - 1 < Thermostat.defaultMinimumBound) {
    throw("Temperature out of bounds");
  }
  this.temperature -= 1;
}

Thermostat.defaultStartingTemperature = 20;
Thermostat.defaultMinimumBound = 10;
