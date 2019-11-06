

document.write('<h1>Узнайте в каком году вышел</h1>')
let btn = document.getElementById('btn');

btn.onclick = function() {
let request = fetch('http://www.omdbapi.com/?apikey=bbfde27a&t=Star+wars');
request.then(function(response){
	const jsonResp = response.json();
	jsonResp.then(function(data){
		console.log(data);
		alert(data.Title);
	})
})
}