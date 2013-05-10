function DownloadableMovie() {
  this.download = function () {
    var n = this.get('name');
    console.log('Downloading movie...' + n);
  };
}

DownloadableMovie.prototype = new MovieModule();
DownloadableMovie.prototype.constructor = MovieModule;

downloadableMovie = new DownloadableMovie();
downloadableMovie.set('name', 'Spiderman');
downloadableMovie.get('name');
downloadableMovie.download();
console.log(downloadableMovie.hasOwnProperty('play'));
console.log(downloadableMovie.hasOwnProperty('download'));
downloadableMovieB = new DownloadableMovie();
downloadableMovieB.set('name', 'SpidermanB');
downloadableMovieB.get('name');
downloadableMovie.download();