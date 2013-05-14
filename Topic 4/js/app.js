// $(document).ready(function() {
//   $('#btnId').click(function() {
//       //after this event is triggered, should execute the rest of .js files
//   });
// });
requirejs.config({
  shim: {
    'jquery': {
      exports: '$'
    },
    'jquery.mobile': {
      deps: ['jquery'],
      exports: '$Mobile'
    }
  },
  //By default load any module IDs from js/lib
  baseUrl: 'js/lib',
  //except, if the module ID starts with "app",
  //load it from the js/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
    app: '../app'
  }
});

// Start the main app logic.
requirejs(['jquery', 'jquery.mobile', 'app/movie', 'app/director'],
function ($, $Mobile, Movie, Director) {
  $('#buttonQuotes').click(function(){
    $('#dialog_quotes_page h1').html(batman.get('director').getName() +' says:');

    var $list = $('#quotesList');
    var quotes = '';
    juanDirector.speak().forEach(function(value) {
      quotes += '<li>' + value + '</li>';
    });
    $list.html(quotes);
  });

  $('#buttonRandomQuotes').click(function(){
    batman.get('director').randomlySpeak();
  });

  var batman = new Movie();
  batman.set('name', 'Batman');

  var juanDirector = new Director('Juan Director');
  juanDirector.set('quotes', ['Cast is everything', 'Do it', 'bla bla']);

  batman.set('director', juanDirector); //set a director to the movie
});