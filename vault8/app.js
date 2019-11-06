

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');


btn1.onclick = function() {
	setTimeout(() => alert('hi'), 1000)
}

btn2.onclick = function() {
	setTimeout(() => alert('салем'), 1000)
}

btn3.onclick = function() {
	setTimeout(() => alert('привет'), 1000)
}


