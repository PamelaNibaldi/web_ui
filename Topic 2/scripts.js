$(document).ready(function() {
    alert("Page has finished loading");

    $("#alias").focus();


/*    document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        $.mobile.loading( 'hide' );
        alert("Escape");
    }
};*/

    var esc_handler = function() {
        $.mobile.loading( 'hide' );
    };

    var e = jQuery.Event("keydown", { keyCode: 27 });
    e.preventDefault();
    console.log(e.preventDefault());

    $("#btnId").click(function(){
        var name = $("#alias").val();
        var $div = $('<div />').appendTo('.container');
        $div.attr('id', 'newDiv');

        $.mobile.loading( 'show' );

        $("#page1").bind(e,esc_handler);
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
    loadTweets();
    });

    function highlight($id, name) {
        $id.html($id.text().replace(name, '<span class="highlight">'+name+'</span>'));
    }

    function loadTweets(){
        $.ajax({
             url: "http://search.twitter.com/search.json?q=html5&rpp=5&include_entities=true&result_type=mixed",
             type: 'GET',
            dataType: 'jsonp',
            context: document.body,
            success: function(data) {
                $('.background').show();
                var results = data.results;
                var $list = $('#tweetsList');
                $list.append("<h1>Tweets list</h1>");
                 var tweet_data;

                for (var i = 0; i < results.length; i++) {
                    tweet_data = "<li>Tweet " + i + ": <br>";
                    tweet_data += "From_user: " + results[i].from_user + "<br>";
                    tweet_data += "Text: " + results[i].text + "<br>";
                    tweet_data += "Created at: " + results[i].created_at + "<br>";
                    tweet_data += "<img src='" + results[i].profile_image_url + "'title= 'Profile_image_url: "+ results[i].profile_image_url+ "'></img></li>";
                    $list.append(tweet_data);
                }
        },
            error: function() {
                console.log("An error occurred in the service call");
            }
        })
    }
});