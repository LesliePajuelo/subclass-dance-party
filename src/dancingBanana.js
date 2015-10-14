var makeBanana = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<span class="dancingBanana"></span>');

  this.setPosition(top, left);

  this.neighborh = false;

  // this.$node.on('mouseover', this.explode);

  
};

//set the prototype

makeBanana.prototype = Object.create(makeDancer.prototype);

//set the constructor to be itself

makeBanana.prototype.constructor = makeBanana;

//methods
// makeBanana.prototype.explode = 

//   function(){
//   var dancers = window.dancers;
//   console.log('works')
  
//   for (var i = 0; i < dancers.length; i++) {
//     var first = [];
//     var second = [];
//     var position = this.position.top;

//     first.push(dancers[i].position.top);
//     first.push(dancers[i].position.left);
//     second.push(dancer[i + 1].position.top);
//     second.push(dancer[i + 1].position.left)

//     var distance = Math.sqrt((first[0] - second[0]) * (first[0] - second[0]) + (first[1] - second[1])
//       * (first[1] - second[1]));

//     if(distance < 50){
//       this.neighborh = true;
      
//       console.log('true')
//     } else {
      
//       console.log('false')
//     }

// }

// };
