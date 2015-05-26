describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('records an increase in temperature', function() {
    var startingTemp = thermostat.temperature;

    thermostat.increaseTemperature();

    expect(thermostat.temperature > startingTemp).toBe(true);
  });
});

