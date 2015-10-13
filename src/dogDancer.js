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

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

makeDogDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);

};

makeDogDancer.prototype.follow = function(){
  this.$node.mousemove(function(w){
    $('.follow').css({
      top: w.clientY,
      left: w.clientx
    })
  });
};
