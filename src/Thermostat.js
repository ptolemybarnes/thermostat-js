var Thermostat = function() { 
  this.temperature           = this.defaults.initialTemperature;
  this.minimumBound          = this.defaults.minimumBound;
  this.maximumBound          = this.defaults.maximumBound;
  this.powerSaveMaximumBound = this.defaults.powerSaveMaximumBound;
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

Thermostat.prototype.defaults = { 
  initialTemperature    : 20,
  minimumBound          : 10,
  maximumBound          : 32,
  powerSaveMaximumBound : 25
}

  
