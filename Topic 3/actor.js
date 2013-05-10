var Actor = function(name, lastname) {
  this.name = name;
  this.lastname = lastname;
};
//Actor.prototype.constructor = Actor;
Actor.prototype.getActorName = function () {
  return this.name;
};

var a1 =  new Actor('Matt','Damon');
var a2 =  new Actor('Ryan','Gosling');
var a3 =  new Actor('Mel','Gibson');

//extend Movie, by adding an array of actors and methods
var MovieWithActors = function() {
  this.actors = [];
};
MovieWithActors.prototype = new MovieModule();
MovieWithActors.prototype.constructor = MovieModule;
MovieWithActors.prototype.addActors = function(actors) {
  this.actors = actors;
};
MovieWithActors.prototype.getActors = function() {
  var n = this.get('name');
  var actorsName = '';
  this.actors.forEach(function(value) {
    actorsName += value.getActorName() + ', ';
  });
  console.log('Actors for movie ' + n + ': '+actorsName);
};

var actors1 = [a1, a2];
var actors2 = [a3];

var movieActors1 = new MovieWithActors();
movieActors1.set('name', 'nombrePeli');
var movieActors2 = new MovieWithActors();
movieActors2.set('name', 'nombrePeli2');
movieActors1.addActors(actors1);
movieActors2.addActors(actors2);

movieActors1.getActors();
movieActors2.getActors();
