function DownloadableMovie(){
  this.download = function () {
    var n = this.get('name') || 'no name';
    console.log('Downloading movie...' + n);
  };
}

DownloadableMovie.prototype = new MovieModule();
DownloadableMovie.prototype.constructor = MovieModule;

downloadable_movie = new DownloadableMovie();
downloadable_movie.set('name', 'Spiderman');
downloadable_movie.get('name');
downloadable_movie.download();
console.log(downloadable_movie.hasOwnProperty('play'));
console.log(downloadable_movie.hasOwnProperty('download'));