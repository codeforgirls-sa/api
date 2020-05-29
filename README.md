# api
Starter for REST API workshop that shows how to start working on REST APIs using HTML, Javascript along with jquery.

- - - -  

# Usage
1. Click `Clone or download` button. Then, ` Download ZIP`.
    <img width="463" alt="download api starter" src="https://user-images.githubusercontent.com/42312407/74997715-e515d780-5467-11ea-8348-6103db4d43f2.png">
2. Right click on the downloaded `.zip` folder and click `Extract All`.

- - - -  

## Activity Goal
In this activity you will learn how to use the first REST API call method **GET**. 
You will call [TheMovieDB](https://developers.themoviedb.org/3/getting-started/introduction) public API to retrieve the list 
of movie information. 

## PreActivity Steps
### 1. Sign up on TheMovieDB
If you don't have an account on *TheMovieDB* API, [sign up for TheMovieDB API](https://www.themoviedb.org/account/signup).

### 2. Get APIKey to use TheMovieDB API
You need to get the authentication key that will authorize you to request for information on a movie.
1. Go to [APIKey Link](https://developers.themoviedb.org/3/getting-started/introduction) .
2. Click `Create` or `click here` under **Request an API Key**.
3. Copy the generated API under **API Key (v3 auth)**.

## Activity Steps
1. `Open` the starter project in any editor.
2. Using editor, `open` **home.js** file under `api/client/public/js` directory.
3. Add the code of REST API call:
    1. Create empty AJAX method that will make the HTTP call and receive the movies information 
         ```javascript
            $.ajax({ });
         ```
    2. Inside the AJAx method, add required parameters that will be used to make the REST API call. The AJAX method must
     be look like this
         ```javascript
            // request Movies
            $.ajax({
                url:   ,
                type:  ,
                contentType:  ,
                success: function(data) { }
            });
        ```
    3. Add values to each parameter to let *TheMovieDB* REST API know what do you want:
        * Since we need to ask the REST API to give us information which means we will only read the data, then the 
         correct HTTP Method is **GET**. 
            ```javascript
                type: 'GET',
            ```
         * We need to ask *TheMovieDB* REST API to give us the data as **Json**
            ```javascript
                contentType: "application/json",
            ```
         * Go to [TheMovieDB REST API documentation](https://developers.themoviedb.org/3/discover/movie-discover) to 
         know what is the exact **URL** that can answer with the list of movies.
         URL will be something similar to the below url.
            > **Replace < YOUR-API-KEY > with the APIKey you generated in [PreActivity Steps](#2-Get-APIKey-to-use-TheMovieDB-API)**
            
            ```javascript     
               url: "https://api.themoviedb.org/3/discover/movie?api_key=<YOUR-API-KEY>",
            ```
           
         * Now the only left one is **success** section, incase the call is succeed and return **200 OK** status the 
         ```function(data){}``` will be called. The parameter **data** is holding the response from *TheMovieDB* REST API 
         which is the *The list of movies information*.
         What we will do is basically iterate through the first 8 elements in the list and add their posters and titles 
         to our HTML page.
            ```javascript 
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

            ```
           
         * Your AJAX method must be look similar to the following method:
            ```javascript   
           
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
       
            ```
4. `Save` your changes to **home.js** file.
5. Using **Google Chrome**, `open` **home.html** on `api/views`.
6. Wahoo 🎉🎉, congratulations you just created your first REST API call. 
    * *home.html* page will be look like this:
    ![ezgif com-add-text](https://user-images.githubusercontent.com/42312407/83294798-94e0ab00-a1f6-11ea-99a6-f54361a85232.gif)


- - - -
# Awesome job 🎉🎉. 
![giphy](https://user-images.githubusercontent.com/42312407/75002304-fb766000-5474-11ea-89e6-9e02cf15c10c.gif)

- - - -  

# Contributor
* [Faten AlDawish](https://github.com/FatenAldawish)
