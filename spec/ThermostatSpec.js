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

  describe('raises an out-of-bound error', function() {
    
    it('when temperature goes below the minimum bound', function() {
      thermostat.temperature = Thermostat.defaultMinimumBound;

      expect( function() { thermostat.decreaseTemperature() })
        .toThrow('Temperature out of bounds');
    });


  });
});

