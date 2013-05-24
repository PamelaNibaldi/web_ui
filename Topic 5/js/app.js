Handlebars.registerHelper('fullName', function(person) {
  return person.name + " " + person.lastName;
});
var handlebarsFn = function (data) {
  var source   = $('#profileTemplateHandlebars').html();
  var compiled = Handlebars.compile(source);
  var html = compiled(data);
  $('#content').html(html);
};
var data = null;
var json = function(fn) {
  var json = null;
  $.ajax({
    'async': false,
    'url': 'data/profileContext.json',
    'dataType': 'json',
    'success': function(data2) {
      data = data2;
    }
  });
};
json();
handlebarsFn(data);

$('#underscoreBtn').on('click', function() {
  var underscoreFn = function(data) {
    var source   = $('#profileTemplateUnderscore').html();
    var compiled = _.template(source, data);
    $('#content').html(compiled);
  };
  underscoreFn(data);
});

$('#dustBtn').on('click', function() {
  var dustFn = function(data) {
    var source   = $('#profileTemplateDust').html();
    var compiled = dust.compile(source, "intro/dust");
    dust.loadSource(compiled);
    var helpers = {
        'fullName' : function(chunk, context, bodies, params) {
            ctx = context.current();
            fName = ctx.person.name + ' ' + ctx.person.lastName;
            console.log(fName);
            chunk.write(fName);
            }
    };
    var base = dust.makeBase(helpers);
    dust.render("intro/dust", base.push(data), function(err, res) {
        $('#content').html(res);
      });
  };
  dustFn(data);
});