var neighborhoods = document.getElementsByClassName("neighborhood")
var searchButton = document.getElementsByClassName("search-button")[0];
var input = document.getElementById("business")
var locationSelect = document.getElementsByClassName("location-select")[0]
var results = document.getElementsByClassName("results")[0]


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
results.innerHTML = ""
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
            results.innerHTML += "<li>" + "<a href = '" + object.url +"'target='_blank'>" +  object.name + "</a>" + "<br>" + object.location.address + "<br>" + "</li>"


            })
             
         }
     })
}


// "<img src='" + object.image.url + "'"+ "</a>"


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








	