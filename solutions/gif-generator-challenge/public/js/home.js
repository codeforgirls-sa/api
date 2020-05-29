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
        url: "https://api.giphy.com/v1/gifs/search?api_key=<YOUR-API-KEY>" ,
        type: 'GET',
        data: query,
        contentType: "application/json",
        success: function (data) {
            var counter = 0;

            data.data.forEach(m => {
                if (counter < 8) {
                    counter++;
                    $(".Result").append('<div class="GIF"><img src="'
                        + m.images.downsized_large.url + '" height=200 width=250></div>');
                }
            });

            $("#ready").show();
            $("#loading").hide();
        }
    });
});