var makeBanana = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<span class="dancingBanana"></span>');

  this.setPosition(top, left);
  
};

//set the prototype

makeBanana.prototype = Object.create(makeDancer.prototype);

//set the constructor to be itself

makeBanana.prototype.constructor = makeBanana;

//methods

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
