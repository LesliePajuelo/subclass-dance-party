var makeDancingBanana = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<span class="blinkyDancer"></span>');

  this.step();

  this.setPosition(top, left);
  
};

//set the prototype

makeDancingBanana.prototype = Object.create(makeDancer.prototype);

//set the constructor to be itself

makeDancingBanana.prototype.constructor = makeDancingBanana;

//methods

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

