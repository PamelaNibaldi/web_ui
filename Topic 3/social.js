var Social = {
    share:function(friend_name) {
      console.log('Sharing movie ' + this.get('name') + ' with ' + friend_name);
    },
    like:function() {
      console.log('Like');
    }
  };
  function extend(destination, source) {
    for (var k in source) {
      if (source.hasOwnProperty(k)) {
        destination[k] = source[k];
      }
    }
    return destination;
  }

extend(MovieModule.prototype, Social);
social_movie = new MovieModule();
social_movie.set('name', 'El Zorro');
social_movie.share('Pepe');
console.log(social_movie);