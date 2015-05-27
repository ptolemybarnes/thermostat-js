describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('#increaseTemperature', function() {

    it('registers an increase in desired temperature', function() {
      var startingTemp = thermostat.temperature;

      thermostat.increaseTemperature();

      expect(thermostat.temperature > startingTemp).toBe(true);
    });

    it('raises error if temperature is increased above maximum', function() {
      thermostat.temperature = thermostat.maximumBound; 

      expect( function() { thermostat.increaseTemperature() })
        .toThrow('Temperature out of bounds');
    });
  });

  describe('#decreaseTemperature', function() {
     
    it('registers a decrease in desired temperature', function() { 
      var startingTemp = thermostat.temperature;

      thermostat.decreaseTemperature();
    
      expect(thermostat.temperature < startingTemp).toBe(true);
    });
    
    it('raises error if temperature is lowered below minimum', function() {
      thermostat.temperature = thermostat.minimumBound; 

      expect( function() { thermostat.decreaseTemperature() })
        .toThrow('Temperature out of bounds');
    });
  });

  describe('#resetTemperature', function() {
    it('resets temperate to its initial value', function() { 
      thermostat.increaseTemperature();
      
      thermostat.resetTemperature();

      expect(thermostat.temperature).toEqual(
        thermostat.defaults.InitialTemperature);
    });
  });

  describe('#turnOnPowerSave', function() { 
    it('lowers maximum bound to 25', function() {
      thermostat.turnOnPowerSave();

      expect(thermostat.maximumBound).toEqual(
        thermostat.defaults.powerSaveMaximumBound);
    });

    it('lowers temp to new maximum bound if it is above', function() {
      thermostat.temperature = thermostat.maximumBound;

      thermostat.turnOnPowerSave();

      expect(thermostat.temperature).toEqual(thermostat.powerSaveMaximumBound);
    });
  });

  describe('#turnOffPowerSave', function() { 
    
    it('raises maximum bound to its defaults.', function() {
      thermostat.turnOnPowerSave();
      thermostat.turnOffPowerSave();

      expect(thermostat.maximumBound).toEqual(thermostat.defaults.MaximumBound);
    });
  });
});

