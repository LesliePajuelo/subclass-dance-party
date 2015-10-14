var makeBaby = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this, top, left-100, timeBetweenSteps);
  
  this.$node = $('<span class="dancingBaby"></span>');

  this.setPosition(top, left);
  this.step();

  this.neighbor = false;
  
};

//set the prototype

makeBaby.prototype = Object.create(makeDancer.prototype);

//set the constructor to be itself

makeBaby.prototype.constructor = makeBaby;

//methods

makeBaby.prototype.step = function(){
  makeDancer.prototype.step.call(this);

    this.$node.fadeToggle('slow');
};

