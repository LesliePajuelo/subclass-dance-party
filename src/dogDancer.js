var makeDogDancer = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<span class="dogDancer follow"></span>');

  this.setPosition(top, left);
};

//set the prototype

makeDogDancer.prototype = Object.create(makeDancer.prototype);

//set the constructor to be itself

makeDogDancer.prototype.constructor = makeDogDancer;

//methods

makeDogDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);

};


