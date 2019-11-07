console.log('gave');
let age = 23;
let height = 166;

let btn = document.getElementById('btn');
document.write('<br> John Wick <br> The Matrix <br> Harry Potter')

btn.onclick = function() {
	let request = fetch('http://www.omdbapi.com/?apikey=bbfde27a&t=John+Wick');

	request.then(function(response) {
		const jsonResp = response.json();
		jsonResp.then(function(data) {
			let movie = prompt("Choose movie")
			if(movie == data.Title){
				alert(data.Year);
			} else {
				alert("there is not such movie")
			}
			console.log(data);
		})
	})


}