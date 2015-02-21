var Animal = function(s, f, n) {        
  this.speed = s;
  this.focus = f;
  this.name = n;
  this.position = 0;
  this.report = function() {
    return this.name + " is it " + this.position;
  };
  this.run = function(){
    if(this.focus < (Math.random() *10)) { //*assigning a random number between 1 and 10 for to measure their focus against, like are they more focused than this?*//
      this.position += this.speed; //*go from their position at their speed, or add their speed*//
    }
  };
}  

 var turtle = new Animal (1, 8, "Tommy"),
      rabbit = new Animal (1.5, 2, "Ronald"),
      fox = new Animal (2.5, 3, "Farrah"),
      goat = new Animal (2,7, "Gale");




var distance = 500;

while(turtle.position < distance && rabbit.position < distance && fox.position < distance && goat.position < distance) {//* this is going to keep going while one of them is not at the finish line yet, those bars mean "or" *//
  turtle.run(); //*set up above*//
  rabbit.run();
  fox.run();
  goat.run();
};

console.log(turtle.report());
console.log(rabbit.report());
console.log(fox.report());
console.log(goat.report());