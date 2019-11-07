

document.write('<h1>Узнайте в каком году вышел</h1>')
let btn = document.getElementById('btn');
let movieName='';
btn.onclick = function() {
let request = fetch(`http://www.omdbapi.com/?apikey=bbfde27a&t=jango`);
request.then(function(response){
	const jsonResp = response.json();
	jsonResp.then(function(data){
		let movie = prompt('enter movie');
		console.log('data',data);
		console.log('movie',movie);
		console.log('year', data.Year)

		if(movie === data.Title){
			alert(`movie was released in ${data.Year}`)
		}
		console.log(movie)
		// alert(data.Title);
	})
})
}