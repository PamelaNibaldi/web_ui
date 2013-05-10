var Social = {
    share:function(friendName) {
      console.log('Sharing movie ' + this.get('name') + ' with ' + friendName);
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
socialMovie = new MovieModule();
socialMovie.set('name', 'El Zorro');
socialMovie.share('Pepe');
console.log(socialMovie);