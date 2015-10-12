// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  //Assign properties
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

};

//Add methods to the fall back object

makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(makeDancer.prototype.step, timeBetweenSteps);
 
  makeDancer.prototype.step;
 };

  makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    makeDancer.prototype.$node.css(styleSettings);
  };

  // now that we have defined the makeDancer.prototype object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);