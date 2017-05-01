var neighborhoods = document.getElementsByClassName("neighborhood")
var searchButton = document.getElementsByClassName("search-button")[0];
var input = document.getElementById("business")


searchButton.addEventListener("mouseover", function(event){
	event.target.style.cursor = "pointer"
})



searchButton.addEventListener("click", searchBusiness)


function searchBusiness() {

var inputText = input.value
console.log(inputText)



}


 // $.ajax({
 //         url: "https://yelp-search.herokuapp.com/search",
 //         method: "GET",
 //         data: {
 //         	term: "pizza",
 //         	location: "philadelphia"
 //        },
 //         success: function(response){
 //             console.log(response)
 //         }

 //     })








	