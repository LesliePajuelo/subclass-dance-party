var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<span class="blinkyDancer"></span>');

  this.setPosition(top, left);

};

//set the prototype

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

//set the constructor to be itself

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//methods

makeBlinkyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);

    this.$node.toggle();
};
