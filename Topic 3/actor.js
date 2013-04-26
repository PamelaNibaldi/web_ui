var Actor = function(name, lastname){
  this.name = name;
  this.lastname = lastname;
};
//Actor.prototype.constructor = Actor;
Actor.prototype.get_actor_name = function () {
  return this.name;
};

var a1 =  new Actor('Matt','Damon');
var a2 =  new Actor('Ryan','Gosling');
var a3 =  new Actor('Mel','Gibson');

//extend Movie, by adding an array of actors and methods
MovieModule.prototype.actors = [];
MovieModule.prototype.addActors = function(actors){
  this.actors = actors;
};
MovieModule.prototype.get_actors = function(){
  var n = this.attributes.name || 'no name';
  var actors_name = 'Actors for movie ' + n + ': ';
  var actors_array = this.actors;
  for (var i in actors_array){
   actors_name += actors_array[i].get_actor_name() + ', ';
  }
  console.log(actors_name);
};

var actors1 = [a1, a2];
var actors2 = [a3];

var movie_actors_1 = new MovieModule();
var movie_actors_2 = new MovieModule();

movie_actors_1.addActors(actors1);
movie_actors_2.addActors(actors2);

movie_actors_1.get_actors();
movie_actors_2.get_actors();
