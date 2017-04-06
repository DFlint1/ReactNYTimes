// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


var key = "aa934bf536894bf8a6ef44e2b1265ae8";

// Helper functions for making API Calls
var helpers = {

  // This function serves our purpose of running the query to geolocate.
 runQuery: function(searchTerm,startDate,endDate){

    console.log(searchTerm);
    console.log(startDate);
    console.log(endDate);

    //send ajax request to nyt api
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=" + searchTerm + "&begin_date=" + startDate + "&end_date=" + endDate;

   return axios.get(queryURL)
      .then(function(response){

        console.log(response);
        //parse through response object, add to object
        var sendThisData =[];
        for(var i=0;i<response.data.response.docs.length;i++){
            var buildMeAnObject = {
            title:response.data.response.docs[i].headline.main,
            url:response.data.response.docs[i].web_url
          };
          
          sendThisData.push(buildMeAnObject);
        }
        //return JSON.stringify(response);
        console.log(sendThisData.length);
        return sendThisData;
    })

  }

}


// We export the helpers function 
module.exports = helpers;