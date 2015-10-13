describe("makeBanana", function() {

  var Dancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    Dancer = new makeBanana(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(Dancer.$node).to.be.an.instanceof(jQuery);
  });


  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(Dancer, "step");
      console.log(timeBetweenSteps)
      expect(Dancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(Dancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(Dancer.step.callCount).to.be.equal(2);
    });
  });
});
