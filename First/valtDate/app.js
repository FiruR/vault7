

let btn = document.getElementById('btn');

btn.onclick = function() {
	let inputValue = document.getElementById('dateInput').value;
	let date = new Date(inputValue);

	let day = date.getDay();
	console.log('day', day)
	array = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

	for (let i=0; i<array.length; i++) {
		if(day === i) {
			alert(array[i]);
			console.log('data')
		}
	}
}
