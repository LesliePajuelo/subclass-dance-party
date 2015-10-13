var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<span class="blinkyDancer"></span>');

  //this.step();

};

//set the prototype

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

//set the constructor to be itself

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//methods

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

makeBlinkyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);

    this.$node.toggle();
};
