define(['jquery', 'jquery.mobile'], function($, $Mobile) {

  var Director = function(name){
    this.name = name;
    this.quotes = [];
  };

  Director.prototype.constructor = Director;

  Director.prototype.speak = function () {
    return this.quotes;
  };

  Director.prototype.randomlySpeak = function () {
    $('#dialog_quotes_page h1').html(this.getName() +' says:');

    var $list = $('#quotesList');
    var randomQuote = this.quotes[Math.floor(Math.random()*this.quotes.length)];
    var quotes = '<li>' + randomQuote + '</li>';
    $list.html(quotes);
  };

  Director.prototype.set = function (attr, quotes) {
    this[attr] = quotes;
  };

  Director.prototype.getName = function() {
    return this.name;
  };

  return Director;
});