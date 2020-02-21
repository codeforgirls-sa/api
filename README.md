# api
Starter for REST API workshop that shows how to start working on REST APIs using Nodejs and Express.

# Requirements
* Node.js


# Usage
1. Click `Clone` or `download` button. Then, Download ZIP.
    <img width="463" alt="download api starter" src="https://user-images.githubusercontent.com/42312407/74997715-e515d780-5467-11ea-8348-6103db4d43f2.png">
2. Right click on the downloaded `.zip` folder and click `Extract All`.

- - - -  

# First Activity
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
    1. After ```$("#ready").hide();```, create empty AJAX method that will make the HTTP call and receive the movies 
    information 
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
         > **Replace < YOUR-API-KEY > with the APIKey you generated in 
         [PreActivity Steps](#2-Get-APIKey-to-use-TheMovieDB-API)** 
            ```     
                url: "https://api.themoviedb.org/3/discover/movie?api_key=<YOUR-API-KEY>&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&with_genres=18%2C53",
            ```
         * Now the only left one is **success** section, incase the call is succeed and return **200 OK** status the 
         ```function(data){}``` will be called. The parameter **data** is holding the response from *TheMovieDB* REST API 
         which is the *The list of movies information*.
         What we will do is basically iterate through the first 8 elements in the list and add their posters and titles 
         to our HTML page.
            ```javascript 
                success: function (data) {
                            var counter = 0;
                            data.results.forEach(m => {
                                if (m.poster_path !== null && counter < 8) {
                                    counter++;
                                    $(".Result").append('<div class="Movies"><p>' + m.title + '</p><img' + ' ' + 'src=' +
                                        'https://image.tmdb.org/t/p/w1280' + m.poster_path + ' height' + '=' + '200' +
                                        ' width' + '=' + '150' + '></div>');
                                }
                            });
                            $("#ready").show();
                            $("#loading").hide();
                         }
            ```
           
         * Your AJAX method must be look similar to the following method:
            ```javascript          
                // request Movies
                $.ajax({
                    url: "https://api.themoviedb.org/3/discover/movie?api_key=<YOUR-API-KEY>&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&with_genres=18%2C53",
                    type: 'GET',
                    contentType: "application/json",
                    success: function (data) {
                                var counter = 0;
                                data.results.forEach(m => {
                                    if (m.poster_path !== null && counter < 8) {
                                        counter++;
                                        $(".Result").append('<div class="Movies"><p>' + m.title + '</p><img' + ' ' + 'src=' +
                                            'https://image.tmdb.org/t/p/w1280' + m.poster_path + ' height' + '=' + '200' +
                                            ' width' + '=' + '150' + '></div>');
                                    }
                                });
                                $("#ready").show();
                                $("#loading").hide();
                             }
                });
            ```
4. `Save` your changes to **home.js** file.
5. Using **Google Chrome**, `open` **home.html** on `api/views`.
6. Wahoo 🎉🎉, congratulations you just created your first REST API call. 
    * *home.html* page will be look like this:
    
    <img width="1674" alt="Screen Shot 2020-02-21 at 12 42 30 AM" src="https://user-images.githubusercontent.com/42312407/74998776-acc3c880-546a-11ea-9a75-d4697dd1c5e7.png">



- - - -


# Second Activity
## Activity Goal
In this activity you will learn how to use cloud services REST API and how to exchange data with other applications.
For this activity, you need to ask the user to talk about his/her week in English, then you will send the text to *IBM Tone Analyzer* service REST API that will extract their feelings then you'll suggest a list of movies based on their analyzed mood.

## PreActivity Steps
### 1. Initialize your server using NodeJs
1. Downloads [Nodejs](https://nodejs.org/en/)
2. `Open` new terminal window and navigate to `api/server` directory. 
    * Install dependencies by run the command `npm install`
    * Run the server using the command `npm start`
    * On your browser `open` the page `http://localhost:8080` you should see `Cannot GET /`, at this point you created 
    a server on your machine that listen to port 8080.
  
### 2. Sign up on IBM Cloud
If you do not already have an IBM Cloud account, [sign up for IBM Cloud](https://cloud.ibm.com/registration).

### 3. Create watson tone analyzer service with IBM Cloud
1. Log into [IBM Cloud](https://cloud.ibm.com/login) with your account.
2. Create `Tone Analyzer` service.
    - From the top bar menu, click `Catalog`.
    - On the left menu, select `AI`.
    - Select `Tone Analyzer`.
    - Choose `Lite` plane.
    - Click `Create`.
3. Once the service is created, go into the service and select `Service credentials` on the left menu,.
4. Click `View credentials` and copy your **apikey** value.

## Activity steps 
### Integrate with IBM Tone Analyzer API
1. Using editor `open` **server.js** file under `api/server/server.js` directory.
2. After the green _Routes Definitions_ comment write the following code that will listen for any request to the URL 
-http://localhost:8080/api/tone-analyzer- and *POST* HTTP method:
    ```javascript
        server.post("/api/tone-analyzer", (req, res) => { });
    ```
3. Save the user's text into `query` variable that your server on your machine will receive on port 8080. 
    ```javascript
        let query = JSON.stringify(req.body.query) || "-1";
    ```
4. Inside **POST** listener you will create REST API call as *IBM Tone Analyzer* API 
[documentation](https://cloud.ibm.com/apidocs/tone-analyzer?code=node) explained:
    * Copy the first code on the left and replace some values as below,
        > **Replace  < YOUR-API-KEY > with the APIKey you generated in [Second PreActivity Steps](#3-Create-watson-tone-analyzer-service-with-IBM-Cloud)** 
        ```javascript
            const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
            const { IamAuthenticator } = require('ibm-watson/auth');
            
            const toneAnalyzer = new ToneAnalyzerV3({
              version: '2017-09-21',
              authenticator: new IamAuthenticator({
                apikey: '<YOUR-API-KEY>',
              }),
              url: 'https://api.eu-gb.tone-analyzer.watson.cloud.ibm.com',
            });
        ```
     * Write the REST API call that will return the user feeling
        ```javascript
             const params = {
                  toneInput: { 'text': query },
                  contentType: 'application/json',
             };
       
             toneAnalyzer.tone(params)
                  .then(toneAnalysis => {
                        res.json({value: toneAnalysis.result.document_tone.tones});
                  })
                  .catch(err => {
                        console.log('error:', err);
                  });  
       ```  
          1. *params*: is a Json variable that contains two values: 
                * *toneInput*: is a Json variable contains *text = user input* that will be sent to 
                *IBM Tone Analyzer* REST API
                * *contentType*: specify the format of *toneInput*
          2. *toneAnalyzer.tone(params)*: is the actual call to *IBM Tone Analyzer* REST API
          3. *.then()*: is the method that will be executed if *IBM Tone Analyzer* REST API return **200 OK** status
                * *toneAnalysis*: contains the analyzed feeling based on the text we already sent
                * *res.json({value: toneAnalysis.result.document_tone.tones});*: is your server response to the one 
                who request a call to the URL: -http://localhost:8080/api/tone-analyzer-
          4. *.catch()*: is the method that will be executed if *IBM Tone Analyzer* REST API call failed
5. Rerun your server to reflect all changes you made
    ``` 
        npm start 
    ```

- - - -


# Third Activity
Now you have two APIs that returns useful data, lets build the right logic using those data to get what we want.

## Flow
![Picture1](https://user-images.githubusercontent.com/42312407/75001669-12b44e00-5473-11ea-8868-bade7f230a21.png)

1. The user sends a paragraph to the application.
2. The application uses the Watson Tone Analyzer service to analyze user mood.
3. The Watson Tone Analyzer service response with the analysis.
4. The application request from the movie DB a specific movies geners based on watson analysis.
5. The movie DB response with a list of movies. 
6. The application response to the user with recommended movies.

## Activity Steps
1. Using editor, `open` **home.js** file under `api/client/public/js` directory.
    <img width="600" alt="home.js" src="https://user-images.githubusercontent.com/42312407/74997631-95371080-5467-11ea-9251-1c874ba5ffe4.png">

2. Add event listener that will be triggered when a user press `submit` button 
    1. **At the first line** in the file add the code:
        ```javascript
           $("#get-mood-form").submit(event => {
               // prevent loading the page
               event.preventDefault();
        ```
    2. **At the last line** in the file add the closing brackets:
        ```javascript
            });
        ```
    * *home.js* file now must be look like this:
        <img width="600" alt="Home.js" src="https://user-images.githubusercontent.com/42312407/74997337-e72b6680-5466-11ea-91a5-934c9957cc7f.png">

3. Add another AJAX method that will call Tone Analyzer REST API you just created. 

    1. Create empty AJAX method:
        ```javascript
            // request Tone Analyzer
            $.ajax({
                url:   ,
                type:  ,
                contentType:  ,
                success: function(data) { }
            });
        ```
    2. Move the old AJAx method that call *TheMovieDB REST API* inside  `function(data) { }` and replace the URL with 
    ```url``` variable to request dynamic value.
    
        ```javascript
            // request Tone Analyzer
            $.ajax({
                 url:   ,
                 type:  ,
                 contentType:  ,
                 success: function(data) { 
                            
                            // request Movies
                            $.ajax({
                            url: movieUrl,
                            type: 'GET',
                            contentType: "application/json",
                            json: true,
                            success: function (data) {
                                        var counter = 0;
                                        data.results.forEach(m => {
                                              if (m.poster_path !== null && counter < 8) {
                                                  counter++;
                                                  $(".Result").append('<div class="Movies"><p>' + m.title + '</p><img src=' +
                                                    'https://image.tmdb.org/t/p/w1280' + m.poster_path + ' height = 200' +
                                                    ' width = 150></div>');
                                               }
                                        });
                                        $("#ready").show();
                                        $("#loading").hide();
                                     }
                            });
                          }
            });
        ```
    3. Add values to the rest parameters as:
        ```javascript
            $.ajax({
                 url: "http://localhost:8080/api/tone-analyzer",
                 type: "post",
                 data: JSON.stringify(query),
                 success: function(data) { 
                                        
                            // request Movies
                            $.ajax({
                            url: movieUrl,
                            type: 'GET',
                            contentType: "application/json",
                            json: true,
                            success: function (data) {
                                        var counter = 0;
                                        data.results.forEach(m => {
                                              if (m.poster_path !== null && counter < 8) {
                                                  counter++;
                                                  $(".Result").append('<div class="Movies"><p>' + m.title + '</p><img src=' +
                                                    'https://image.tmdb.org/t/p/w1280' + m.poster_path + ' height = 200' +
                                                    ' width = 150></div>');
                                               }
                                        });
                                        $("#ready").show();
                                        $("#loading").hide();
                                     }
                            });
                          }
            });

        ```
    4. Initialize TheMovieDB REST API URL based on user mood by adding the following code before TheMovieDB call.
      
          **Replace < YOUR-API-KEY > in each url with the APIKey you generated in [First PreActivity Steps](#2-Get-APIKey-to-use-TheMovieDB-API)** 
        
          ```javascript
             Math.max(...data.value.map(o => {largestTone = o.tone_id; o.score}));
            
             switch (largestTone) {
                   case 'anger':
                         movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=<YOUR-API-KEY>&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&with_genres=18%2C53";
                         break;
                   case 'fear':
                         movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=<YOUR-API-KEY>&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&with_genres=18%2C53";
                         break;
                   case 'joy':
                         movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=<YOUR-API-KEY>&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&with_genres=18%2C53";
                         break;
                   case 'sadness':
                         movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=<YOUR-API-KEY>&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&with_genres=18%2C53";
                         break;
                   case 'analytical':
                         movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=<YOUR-API-KEY>&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&with_genres=18%2C53";
                         break;
                   case 'confident':
                         movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=<YOUR-API-KEY>&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&with_genres=18%2C53";
                         reak;
                   case 'tentative':
                         movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=<YOUR-API-KEY>&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&with_genres=18%2C53";
                         break;
                   default:
                         movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=<YOUR-API-KEY>&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&with_genres=18%2C53";
             }
           ```   
4. Download [Moesif CORS Extention](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc?hl=en-US)
    * Once installed, `click` it in your browser to activate the extension. Make sure the icon’s label goes from *off* to *on*. <img width="181" alt="Screen Shot 2020-02-21 at 6 37 38 AM" src="https://user-images.githubusercontent.com/42312407/75002221-b18d7a00-5474-11ea-8043-d893fef872af.png">

5. Using **Google Chrome**, `open` **home.html** on `api/views` and start testing your amazing app.
    * Make sure that your [server](#Integrate-with-IBM-Tone-Analyzer-API) still running and listening to port 8080
# Awesome job 🎉🎉. 
![giphy](https://user-images.githubusercontent.com/42312407/75002304-fb766000-5474-11ea-89e6-9e02cf15c10c.gif)






