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
});

