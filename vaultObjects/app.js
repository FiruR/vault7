let movieYear = {
	'John Wick' :'2014',
	'Harry Potter' : '2011',
	'The Matrix' : '2000',
}

let btn = document.getElementById('btn');
document.write('<br> John Wick <br> The Matrix <br> Harry Potter')

btn.onclick = function() {
	let movie = prompt("Какой фильм вас интересует?");

	for(let key in movieYear){
		if(key.includes(movie)){
		  alert(`фильм вышел в ${movieYear[key]} году`);
		} else {
			alert(`такого фильма нет в списке.`)
		}
	}
}


// btn.onclick = function() {
// 	let request = fetch('http://www.omdbapi.com/?apikey=bbfde27a&t=John+Wick');

// 	request.then(function(response) {
// 		const jsonResp = response.json();
// 		jsonResp.then(function(data) {
// 			let movie = prompt("Choose movie")
// 			if(movie == data.Title){
// 				alert(data.Year);
// 			} else {
// 				alert("there is not such movie")
// 			}
// 			console.log(data);
// 		})
// 	})
// }
