
// request Movies
$.ajax({
    url: "https://api.themoviedb.org/3/discover/movie?api_key=<YOUR-API-KEY>",
    type: 'GET',
    contentType: "application/json",
    success: function (data) {

        let counter = 0;
        let selected = [];

        let randomItem = Math.ceil(Math.random() * data.results.length);

         while (counter < 4) {

            selected.push(randomItem);

            if (data.results[randomItem].poster_path !== null) {

                counter++;
                let selectedMovie = data.results[randomItem];


                $("#container-movies").append(
                    '<div class="container-movie">' +
                    '   <div class="movie">' +
                    '       <div class="movie-inside front">' +
                    '           <img src="https://image.tmdb.org/t/p/w1280' + selectedMovie.poster_path + '" height=400 width=270>' +
                    '       </div>' +
                    '       <div class="movie-inside back">' +
                    '           <div class="movie-details">' +
                    '              <div class="movie-snap"><img src="https://image.tmdb.org/t/p/w1280' + selectedMovie.backdrop_path + '" height=150 width=270></div>' +
                    '              <h1>' + selectedMovie.original_title + '<br><span>' + selectedMovie.release_date.slice(0, 4) + '</span></h1>' +
                    '              <p class="movie-synopsis">' + selectedMovie.overview + '</p>' +
                    '           </div>' +
                    '       </div>' +
                    '   </div>' +
                    '</div>');
            }

            while (selected.includes(randomItem)) {
                randomItem = Math.ceil(Math.random() * data.results.length);
            }

        }

    }
});
