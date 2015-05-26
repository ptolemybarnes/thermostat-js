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

  describe('when temperature goes below the minimum bound', function() {
    
    it('raises an out-of-bound error', function() {
      thermostat.temperature = thermostat.minimumBound; 

      expect( function() { thermostat.decreaseTemperature() })
        .toThrow('Temperature out of bounds');
    });
  });

  describe('when temperature goes above maximum bound', function() {
    it('raises an out-of-bounds error', function() {
      thermostat.temperature = thermostat.maximumBound; 

      expect( function() { thermostat.increaseTemperature() })
        .toThrow('Temperature out of bounds');
    });
  });
});

