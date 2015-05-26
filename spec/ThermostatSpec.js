describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('registers an increase in desired temperature', function() {
    var startingTemp = thermostat.temperature;

    thermostat.increaseTemperature();

    expect(thermostat.temperature > startingTemp).toBe(true);
  });

  it('registers a decrease in desired temperature', function() { 
    var startingTemp = thermostat.temperature;

    thermostat.decreaseTemperature();
  
    expect(thermostat.temperature < startingTemp).toBe(true);
  });

  describe('#resetTemperature', function() {
    it('resets temperate to its initial value', function() { 
      thermostat.increaseTemperature();
      
      thermostat.resetTemperature();

      expect(thermostat.temperature).toEqual(thermostat.defaultInitialTemperature);
    });
  });

  describe('when temperature is lowered below the minimum bound', function() {
    
    it('raises an out-of-bound error', function() {
      thermostat.temperature = thermostat.minimumBound; 

      expect( function() { thermostat.decreaseTemperature() })
        .toThrow('Temperature out of bounds');
    });
  });

  describe('when temperature is raised above maximum bound', function() {
    it('raises an out-of-bounds error', function() {
      thermostat.temperature = thermostat.maximumBound; 

      expect( function() { thermostat.increaseTemperature() })
        .toThrow('Temperature out of bounds');
    });
  });

  describe('when power save mode is turned on', function() { 
    it('lowers maximum bound to 25', function() {
      thermostat.turnOnPowerSave();

      expect(thermostat.maximumBound).toEqual(thermostat.defaultPowerSaveMaximumBound);
    });

    it('lowers temp to new maximum bound if it is above', function() {
      thermostat.temperature = thermostat.maximumBound;

      thermostat.turnOnPowerSave();

      expect(thermostat.temperature).toEqual(thermostat.powerSaveMaximumBound);
    });
  });

  describe('when power save mode is turned off', function() { 
    it('raises maximum bound to its default', function() {
      thermostat.turnOnPowerSave();
      thermostat.turnOffPowerSave();

      expect(thermostat.maximumBound).toEqual(thermostat.defaultMaximumBound);
    })
  });
});

