$(document).ready(function(){
  $('#btnId').on('click', function(){

    function Movie(){
      var attributes = {};
      this.play = function () {
        var n = attributes['name'] || 'no name';
        this.publish(n, 'playing');
      },
      this.stop = function () {
        var n = attributes['name'] || 'no name';
        this.publish(n, 'stopped');
      },
      this.set = function (attr, value) {
        attributes[attr] = value;
      },
      this.get = function (attr) {
        return attributes[attr] || 'attribute does not exist';
      }
    };

    //refactor: Module pattern
    // var Movie = (function () {
    //   var my = {};
    //   var attributes = {};
    //   my.set = function (attr, value) {
    //     attributes[attr] = value;
    //   };
    //   my.get = function (attr) {
    //     return attributes[attr] || 'attribute does not exist';
    //   };
    //   my.play = function () {
    //     var n = attributes['name'] || 'no name';
    //     this.publish(n, 'playing');
    //   };
    //   my.stop = function () {
    //     var n = attributes['name'] || 'no name';
    //     this.publish(n, 'stopped');
    //   };
    //   return my;
    // })();

    var MovieObserver = {
      addSubscriber:function (callback, fn) {
        this.subscribers[this.subscribers.length] = [fn, callback];
      },
      removeSubscriber:function (callback, fn) {
        for (var i = 0; i < this.subscribers.length; i++) {
          if (this.subscribers[i][0] === fn && this.subscribers[i][1] === callback) {
          delete(this.subscribers[i]);
          }
        }
      },
      publish:function (which, fn) {
        for (var i = 0; i < this.subscribers.length; i++) {
          if (typeof this.subscribers[i][1] === 'function' && this.subscribers[i][0] === fn) {
            this.subscribers[i][1](which);
          }
        }
      },
      make:function (o) { // turns an object into a publisher
        for (var i in this) {
          o[i] = this[i];
          o.subscribers = [];
        }
      }
    };

    var movie1 = new Movie();
    //var movie1 = Movie;
    movie1.set('name', 'Batman');
    MovieObserver.make(movie1); // turns an object into a publisher

    console.log('getting existing attribute name: ' +movie1.get('name'));
    console.log('getting non-existing attribute x: ' +movie1.get('x'));

    var play_listener = {
      play_listen:function (which) {
        console.log('Playing movie '+ which)
      },
      stop_listen:function (which) {
        console.log('Stopped playing movie ' + which)
      }
    };


    movie1.addSubscriber(play_listener.play_listen, 'playing');
    movie1.addSubscriber(play_listener.stop_listen, 'stopped');
    movie1.play();
    movie1.stop();



    function DownloadableMovie(){
      this.download = function () {
        var n = this.get('name') || 'no name';
        console.log('Downloading movie...' + n);
      };
    };
    DownloadableMovie.prototype = new Movie();


    downloadable_movie = new DownloadableMovie();
    downloadable_movie.set('name', 'Spiderman');
    downloadable_movie.get('name');
    downloadable_movie.download();
    console.log(downloadable_movie.hasOwnProperty('play'));
    console.log(downloadable_movie.hasOwnProperty('download'));


    var Social = {
      share:function(friendName) {
        console.log('Sharing ' + this.get('name') + ' with ' + friendName);
      },
      like:function() {
        console.log('Like');
      }
    };
    function extend(destination, source) {
      console.log("source: "+source);
      for (var k in source) {
        if (source.hasOwnProperty(k)) {
          destination[k] = source[k];
        }
      }
      return destination;
    }


    console.log(Movie.prototype);
    extend(Movie.prototype, Social);
    social_movie = new Movie();
    social_movie.share('Pepe');
    console.log(social_movie);

  });
});