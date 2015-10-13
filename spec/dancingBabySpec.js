describe("dancingBaby", function() {

  var dancingBaby;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancingBaby = new makeBaby(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(dancingBaby.$node).to.be.an.instanceof(jQuery);
  });

  xit("should have a step function that makes its node blink", function() {
    sinon.spy(dancingBaby.$node, 'toggle');
    dancingBaby.step();
    expect(dancingBaby.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(dancingBaby, "step");
      expect(dancingBaby.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(dancingBaby.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(dancingBaby.step.callCount).to.be.equal(2);
    });
  });
});
