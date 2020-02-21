

    $(".ResultView").show();
    $(".WelcomeView").hide();

    $("#loading").show();
    $("#ready").hide();

    // get user input
    var query = {query: $("textarea[name='query']").val()};
    var largestTone;
    var movieUrl;
