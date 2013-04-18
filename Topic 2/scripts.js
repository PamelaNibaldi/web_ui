// $('#page1').live( 'pageinit', function(){
//     alert("Page has finished loading");
// });


$('#page2').live( 'pageinit', function(){

    $("#alias").focus();

    $('#page2').keydown(function(e){
        if(e.which == 27){
            $.mobile.loading( 'hide' );
            console.log("stop spinner event invoked with ESC");
        }
    });

    $("#btnId").click(function(){
        var name = $("#alias").val();
        var $div = $('<div />').appendTo('.container');
        $div.attr('id', 'newDiv');

        $.mobile.loading( 'show' );

        $.ajax({
            url: "http://bootcamp.aws.af.cm/welcome/"+name,
            type: 'GET',
            dataType: 'json',
            context: document.body,
            success: function(data) {
                $div.append(data.response);
                highlight($div, name);
               $.mobile.loading( 'hide' );
            },
            error: function() {
                $div.append("An error occurred in the service call");
                $div.addClass("red_colored");
                $.mobile.loading( 'hide' );
            }
        })
        function highlight($id, name) {
            $id.html($id.text().replace(name, '<span class="highlight">'+name+'</span>'));
        }
    });
});

$('#page3').live( 'pageinit', function(){
    var results;
    function load_tweet_info(e){
      var tweet_id = ($(this).attr('id')).split("_")[1];
      var new_text = "<img src='" + results[tweet_id].profile_image_url + "'></img>";
      new_text += "<p>Tweet:<br>" + results[tweet_id].text + "<br>User: <br>"+ results[tweet_id].from_user + "<br>Created at:<br>" + results[tweet_id].created_at + "</p>";
      $("#tweet_info").html(new_text);
    };

    $.ajax({
        url: "http://search.twitter.com/search.json?q=html5&rpp=5&include_entities=true&result_type=mixed",
        type: 'GET',
        dataType: 'jsonp',
        context: document.body,
        success: function(data) {
            results = data.results;
            var $list = $('#tweetsList');
            var tweet_data = "<h1>Tweets list</h1>";
            var tweet;
            $list.on("click", "li", load_tweet_info);
            for (var i = 0; i < results.length; i++) {
                tweet = "<li id='tweet_"+i+"'><a href='#dialog_tweet' data-rel='dialog' data-transition='pop'>From_user: " + results[i].from_user + "<br>";
                tweet += "Text: " + results[i].text + "<br>";
                tweet += "<img src='" + results[i].profile_image_url + "'title= 'Profile_image_url: "+ results[i].profile_image_url+ "'></img></li>";
                tweet_data += tweet;
            }
            $list.append(tweet_data);
            $list.listview('refresh');
    },
        error: function() {
            console.log("An error occurred in the service call");
        }
    });
    $("#dialog_tweet").on("pageshow",function(){
        $("#page3").addClass("ui-dialog-background");
    });
    $("#dialog_tweet").on("pagehide",function(){
        $("#page3").removeClass("ui-dialog-background");
    });

});