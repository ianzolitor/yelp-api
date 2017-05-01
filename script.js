var neighborhoods = document.getElementsByClassName("neighborhood")
var searchButton = document.getElementsByClassName("search-button")[0];
var input = document.getElementById("business")
var locationSelect = document.getElementsByClassName("location-select")[0]
var busName = document.getElementsByClassName("name")[0]
var busAddress = document.getElementsByClassName("address")[0]
var busImage = document.getElementsByClassName("image")[0]


var clickNeighborhood = ""

// document.body.addEventListener("keypress", function (event) {
// 	if (event.keyCode===13){
// 		searchBusiness()
// 	}
// })


for (var i = 0; i < neighborhoods.length; i++) {
	neighborhoods[i].addEventListener("mouseover", function(event){
		event.target.style.cursor = "pointer"
	})
}


for (let i = 0; i < neighborhoods.length; i++) {
	neighborhoods[i].addEventListener("click", function(event){
		if(i===0){
			clickNeighborhood = "Germantown"
		}
		else if(i===1){
			clickNeighborhood = "West Philadelphia"
		}
		else if(i===2){
			clickNeighborhood = "Fishtown"
		}
		else if(i===3){
			clickNeighborhood = "Manayunk"
		}
		else if(i===4){
			clickNeighborhood = "Center City"
		}
		locationSelect.innerHTML = "Find Businesses in " + clickNeighborhood
		console.log(clickNeighborhood)
	})
}

searchButton.addEventListener("mouseover", function(event){
	event.target.style.cursor = "pointer"
})

searchButton.addEventListener("click", searchBusiness)


function searchBusiness() {

var inputText = input.value
 $.ajax({
         url: "https://yelp-search.herokuapp.com/search",
         method: "GET",
         data: {
         	term: inputText,
         	location: clickNeighborhood
        },
         success: function(response){
         	console.log(response)
       
			response.businesses.forEach(function(object){
            busName.innerHTML += "<li>" + object.name + "</li>"


            })
             
         }
     })
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








	