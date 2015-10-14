$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.  
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $(".dancefloor").height() * Math.random(),
      $(".dancefloor").width() * Math.random(),
      //timeBetweenSteps
      Math.random() * 1000
    );
    $('.dancefloor').append(dancer.$node);
    window.dancers.push(dancer);
  });
  
  $('.lineUp').on('click', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      dancer.lineup();
    }
  });

  $(document).on('mousemove',function(e){
    $('.follow').css({
      left: e.pageX-60,
      top: e.pageY-30
    });
  })
})


//********************** calculating whether images are close to each other ********************************///////
// var overlaps = function(obj) {
// //Create an object to hold the targets and to register if something has been hit
    
//   var elements = {targets: [], hits:[]};

// //for each element in elements
//   this.each(function() {
//     //Find the offset for each element on the screen
//   var bounds = $(this).offset();
      
//   bounds.right = bounds.left + $(this).outerWidth();
//   bounds.bottom = bounds.top + $(this).outerHeight();
  
//   //call offset on the object passed in
//   var compare = $(obj).offset();
  
//   //jquery only returns left and right sides but outerX + left/top will
//   //give the total size
//   compare.right = compare.left + $(obj).outerWidth();
//   compare.bottom = compare.top + $(obj).outerHeight();

//   //do ALL the comparing, if any of them are true then
//   //add the element on the page to targets and add the object to hits
//   if (!(compare.right < bounds.left ||
//     compare.left > bounds.right ||
//     compare.bottom < bounds.top ||
//     compare.top > bounds.bottom)) 
//   {
//     elements.targets.push(this);
//     elements.hits.push(obj);
//   }
// });
//   return elements;
// });

//Follow the readme
//Iterate through the window.dancers array
//Compare the position of first object tothe second if the answer is less than 50px set off animation