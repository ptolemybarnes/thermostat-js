var Thermostat = function() { 
  this.defaultInitialTemperature = 20
  this.defaultMinimumBound = 10;
  this.defaultMaximumBound = 32;
  this.defaultPowerSaveMaximumBound = 25;

  this.temperature  = this.defaultInitialTemperature;
  this.minimumBound = this.defaultMinimumBound;
  this.maximumBound = this.defaultMaximumBound;
  this.powerSaveMaximumBound = this.defaultPowerSaveMaximumBound;
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.defaultInitialTemperature;
}

Thermostat.prototype.increaseTemperature = function() { 
  if (this.isIncreaseAboveMaximumBound()) {
    throw("Temperature out of bounds");
  }
  this.temperature += 1;
}

Thermostat.prototype.decreaseTemperature = function() { 
  if (this.isDecreaseBelowMinimumBound()) {
    throw("Temperature out of bounds");
  }
  this.temperature -= 1;
}

Thermostat.prototype.turnOnPowerSave = function() {
  this.maximumBound = this.powerSaveMaximumBound;
  if (this.temperature > this.powerSaveMaximumBound) {
    this.temperature  = this.powerSaveMaximumBound;
  }
};

Thermostat.prototype.turnOffPowerSave = function() {
  this.maximumBound = this.defaultMaximumBound;
};

Thermostat.prototype.isDecreaseBelowMinimumBound = function() { 
  return (this.temperature - 1 < this.minimumBound);
};

Thermostat.prototype.isIncreaseAboveMaximumBound = function() { 
  return (this.temperature + 1 > this.maximumBound);
};

