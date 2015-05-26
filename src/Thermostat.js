var Thermostat = function() { 
  this.defaultStartingTemperature = 20
  this.defaultMinimumBound = 10;
  this.defaultMaximumBound = 32;
  this.defaultPowerSaveMaximumBound = 25;

  this.temperature  = this.defaultStartingTemperature;
  this.minimumBound = this.defaultMinimumBound;
  this.maximumBound = this.defaultMaximumBound;
  this.powerSaveMaximumBound = this.defaultPowerSaveMaximumBound;
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

Thermostat.prototype.turnOnPowerSave = function() {
  this.maximumBound = this.powerSaveMaximumBound;
  this.temperature  = this.powerSaveMaximumBound;
};

Thermostat.prototype.turnOffPowerSave = function() {
  this.maximumBound = this.defaultMaximumBound;
};

