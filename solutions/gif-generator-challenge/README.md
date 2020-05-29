# gif-generator-challenge
Solution for gif generator challenge on REST API workshop.

- - - -  

# Usage
 1. `Open` the starter project in any editor.
 2. Using editor, `open` the `api/gif-generator-challenge-starter` directory.

- - - -  

# Activity Goal
In this activity you will be challenging to apply REST API call method **GET** by your own. 
You will call [Giphy](https://developers.giphy.com/docs/sdk) public API to search for GIFs. 

# PreActivity Steps
## 1. Sign up on Giphy
If you don't have an account on *Giphy* API, [sign up for Giphy API](https://developers.giphy.com/dashboard/?create=true).

## 2. Get APIKey to use Giphy API
You need to get the authentication key that will authorize you to request for information on a movie.
1. Go to [APIKey Link](https://developers.giphy.com/dashboard/?create=true) .
2. Click `Create An App`.
3. Select `API`.
4. Press `Next Step`.
5. Add `App Name` and `App Description`.
6. Press `Create App`.
3. Copy the generated API under **API Key**.

# Activity Steps
1. Using editor, `open` **home.js** file under `api/gif-generator-challenge-starter/public/js` directory.
3. Add the code of REST API call:
    1. Inside the AJAx method, add required parameters that will be used to make the REST API call. 
    3. Add values to each parameter to let *Giphy* REST API know what do you want:
        * Since we need to ask the REST API to give us information which means we will only read the data, then the 
         correct HTTP Method is **GET**. 
            ```javascript
                type: 'GET',
            ```
         * We need to ask *Giphy* REST API to give us the data as **Json**
            ```javascript
                contentType: "application/json",
            ```
         * Go to [Giphy REST API documentation](https://developers.giphy.com/docs/api/endpoint#search) to 
         know what is the exact **URL** that can answer with the list of GIFs.
         URL will be something similar to the below url.
            > **Replace < YOUR-API-KEY > with the APIKey you generated in [PreActivity Steps](#2-Get-APIKey-to-use-Giphy-API)**
            
            ```javascript     
               url: "https://api.giphy.com/v1/gifs/search?api_key=<YOUR-API-KEY>",
            ```
         * Now the only left one is **success** section, incase the call is succeed and return **200 OK** status the 
         ```function(data){}``` will be called. The parameter **data** is holding the response from *Giphy* REST API 
         which is the *The list of GIFs*.
         What we will do is adding Gif url.
            ```javascript 
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
            ```
           
         * Your AJAX method must be look similar to the following method:
            ```javascript          
                // request Movies
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
            ```
4. `Save` your changes to **home.js** file.
5. Using **Google Chrome**, `open` **home.html** on `api/gif-generator-challenge-starter/views`.
6. Wahoo 🎉🎉, we're done. 
    * *home.html* page will be look like this:
    ![ezgif com-video-to-gif](https://user-images.githubusercontent.com/42312407/83305122-d8441500-a208-11ea-8206-5c6452f5b0e3.gif)


- - - -  

# Awesome job 🎉🎉. 
![giphy](https://user-images.githubusercontent.com/42312407/83303367-9e254400-a205-11ea-921e-50d1901e2156.gif)


- - - -  

# Contributor
* [Faten AlDawish](https://github.com/FatenAldawish)



