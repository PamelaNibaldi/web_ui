// requirejs.config({
//   shim: {
//     'jquery': {
//       exports: '$'
//     },
//     'underscore': {
//        deps: ['jquery'],
//       exports: 'underscore'
//     },
//     'backbone': {
//       deps: ['underscore'],
//       exports: 'backbone'
//     }
//   },
//   baseUrl: 'js/libs',
//   paths: {
//     app: '../app'
//   }
// });

// Start the main app logic.
// requirejs(['jquery', 'underscore', 'backbone'],
var model = function () {

  var Movie = (function() {
    var Movie = function(){this.attributes = {};};
    Movie.prototype.constructor = Movie;
    Movie.prototype.set = function (attr, value) {
      this.attributes[attr] = value;
    };
    Movie.prototype.get = function (attr) {
      return this.attributes[attr];
    };
    return Movie;
  })();
  // model constructor function
  //
  var makeEmailModel = function(data) {
      var movie = new Movie();
      movie.set('title', data.title);
      movie.set('director', data.director);
      movie.set('year', data.year);
      return movie;
  };

  // load data from the server and create
  // model objects
  //
  var loadMovies = function(callbacks) {
    var json = null;
    $.ajax({
      'async': false,
      'url': 'data/moviesContext.json',
      'dataType': 'json',
      'success': function(data) {
        var movies = [];
        a.forEach(function(movieData) {
          movies.push(makeMovieModel(movieData));
        });
        console.log(movies);
      }
    });
  };
};