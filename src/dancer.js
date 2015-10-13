// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  //Assign properties
  this.top = top;
  this.left = left;
  this._timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.step();

  this.setPosition(top, left);
 };

//Add methods to the fall back object

makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this._timeBetweenSteps);
  };

makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

