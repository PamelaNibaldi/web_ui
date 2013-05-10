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

var playListener = {
  playListen:function (which) {
    console.log('Playing movie '+ which);
  },
  stopListen:function (which) {
    console.log('Stopped playing movie ' + which);
  }
  };

var movie2 = new MovieModule();
movie2.set('name', 'Xman');
MovieObserver.make(movie2); // turns an object into a publisher

movie2.addSubscriber(playListener.playListen, 'playing');
movie2.addSubscriber(playListener.stopListen, 'stopped');
movie2.play();
movie2.stop();
