var Thermostat = function() { 
  this.temperature = Thermostat.defaultStartingTemperature;
}

Thermostat.prototype.increaseTemperature = function() { 
  this.temperature += 1;
}

Thermostat.defaultStartingTemperature = 15;
