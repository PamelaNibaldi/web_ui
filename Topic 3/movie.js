 // function Movie(){
    //   var attributes = {};
    //   this.play = function () {
    //     var n = attributes['name'] || 'no name';
    //     this.publish(n, 'playing');
    //   },
    //   this.stop = function () {
    //     var n = attributes['name'] || 'no name';
    //     this.publish(n, 'stopped');
    //   },
    //   this.set = function (attr, value) {
    //     attributes[attr] = value;
    //   },
    //   this.get = function (attr) {
    //     return attributes[attr] || 'attribute does not exist';
    //   };
    // }

//refactor: Module pattern
var MovieModule = (function() {

  var Movie = function(){this.attributes = {};};

  Movie.prototype.constructor = Movie;

  Movie.prototype.set = function (attr, value) {
    this.attributes[attr] = value;
  };
  Movie.prototype.get = function (attr) {
    return this.attributes[attr] || 'attribute does not exist';
  };
  Movie.prototype.play = function () {
    var n = this.attributes.name || 'no name';
    this.publish(n, 'playing');
  };
  Movie.prototype.stop = function () {
    var n = this.attributes.name || 'no name';
    this.publish(n, 'stopped');
  };

  return Movie;
})();

var movie1 = new MovieModule();
movie1.set('name', 'Batman');
console.log('getting existing attribute "name": ' +movie1.get('name'));
console.log('getting non-existing attribute "x": ' +movie1.get('x'));