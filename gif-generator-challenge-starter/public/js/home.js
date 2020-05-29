$("#get-mood-form").submit(event => {
    // prevent loading the page
    event.preventDefault();

    $(".ResultView").show();
    $(".WelcomeView").hide();

    $("#loading").show();
    $("#ready").hide();

    var query = {q: $("textarea[name='query']").val()};

    // request Gif
    $.ajax({
        url:  ,
        type:  ,
        contentType:  ,
        data: query,
        success: function (data) {
            var counter = 0;

            data.data.forEach(m => {
                if (counter < 8) {
                    counter++;
                    $(".Result").append('<div class="GIF"><img src="'+  <add-the-gif-here>  +'" height=200 width=250></div>');
                }
            });

            $("#ready").show();
            $("#loading").hide();
        }
    });
});