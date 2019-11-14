

let btn = document.getElementById('btn');

btn.onclick = function() {
	let inputValue = document.getElementById('dateInput').value;
	let date = new Date(inputValue);

	let day = date.getDay();

	array = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

	for (let i=0; i<array.length; i++) {
		if(day === i) {
			alert(array[i]);
			console.log('data')
		}
	}
};



var span = document.getElementById('span');

let timeInterval = function() {
	let dateTime = new Date();
	let hours = dateTime.getHours();
	let minutes = dateTime.getMinutes();
	let seconds = dateTime.getSeconds();
	span.textContent = ` ${hours} : ${minutes} : ${seconds}`;
}


setInterval(timeInterval, 1000);
