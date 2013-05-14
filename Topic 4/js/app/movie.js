define(['./director'], function(Director) {

  var Movie = function(){
    this.attributes = {};
  };

  Movie.prototype.constructor = Movie;

  Movie.prototype.set = function (attr, value) {
    this.attributes[attr] = value;
  };
  Movie.prototype.get = function (attr) {
    return this.attributes[attr];
  };
  Movie.prototype.play = function () {
    var n = this.attributes.name;
    this.publish(n, 'playing');
  };
  Movie.prototype.stop = function () {
    var n = this.attributes.name;
    this.publish(n, 'stopped');
  };

  return Movie;
});