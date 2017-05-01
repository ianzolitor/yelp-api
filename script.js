// Client ID
// S27O-7sUxrYr3vqsXakyFw


// Client Secret
// xiImYzYVDp3iHy4OYhzCxlLlC8mrZY6qO2OEHGHPZT7rGu3o9uUg7hVRlPgoty78


// Object {access_token: "vH24YX0r7bXrRE03KmPuEFJRIr6qkbgup9zsAb5xmMY1alruZs…Hu5m1bjPpMu1hT51DUtZveNZHWSkpSROHUgUha4-_nm8DWXYx", expires_in: 15547396, token_type: "Bearer"}


$(document).ready(function() {


 $.ajax({
         url: "https://yelp-search.herokuapp.com/search",
         method: "GET",
         data: {
         	term: "pizza",
         	location: "philadelphia"
        },
         success: function(response){
             console.log(response)
         }

     })





})



	
// 	 $.ajax({
//       method: "get",
//     url: "https://api.yelp.com/v3/businesses/search",
//     data: {
//         term: "pizza",
//         location: "philadelphia"
//     },
//     headers: {
//         "Authorization": "Bearer vH24YX0r7bXrRE03KmPuEFJRIr6qkbgup9zsAb5xmMY1alruZs…Hu5m1bjPpMu1hT51DUtZveNZHWSkpSROHUgUha4-_nm8DWXYx"
//     },
//     dataType: "json",
//     success: function(response) {
//         console.log(response);

//     }

// }) 
