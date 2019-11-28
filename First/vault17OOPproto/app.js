
let fridge = new FridgeMachine(200);

fridge.enable();

console.log(fridge)

fridge.addFood('колбаса');
fridge.addFood('сыр');
fridge.addFood('молоко');

let foodInFridge = fridge.getFoodList();

console.log('1', foodInFridge);

// foodInFridge.push('мясо'); // mssive can be changed

// console.log('get1', fridge.getFoodList());

// fridge.addFood('мясо');// error, more than 3

// fridge.takeFood('молоко'); // get cheese
// console.log('get2', fridge.getFoodList());


// fridge.addFood('мясо'); // add myaso

// fridge.takeFood('cыр'); // error not such cheese
// console.log('get3', fridge.getFoodList());

// // fridge.disable();

// // fridge.addFood('cыр') // error, disabled
// // fridge.takeFood('молоко'); //error, disabled
// // fridge.getFoodList(); //error, disabled
// console.log('2', foodInFridge)






















// function Machine(power) {
// 	this._power = power;
// 	this._enabled = false;
// 	this.enable = function() {
// 		this._enabled = true;
// 	};

// 	this.disable = function() {
// 		console.log('disabled')
// 		this._enabled = false;
// 	}
// }



// function Coffee(power) {
// 	Machine.call(this, power);

// 	// let power = 100;
// 	let waterAmount = 0;
// 	const CAPACITY = 1000;
// 	this.setWaterAmount = function(amount) {
// 		if (amount < 0) {
// 			throw new Error('Error1')
// 		} 

// 		if (amount > CAPACITY) {
// 			throw new Error('Error2')
// 		}

// 		waterAmount = amount;
// 	}

// 	this.getWaterAmount = function() {
// 		return waterAmount;
// 	}

// 	// let getBoilTime = function() {
// 	// 	return 4200 * this.waterAmount *80/ power;
// 	// }.bind(this);

// 	let self = this;
// 	function getBoilTime() {
// 		return 4200 * waterAmount *80/ self._power;
// 	}

// 	this.run = function() {
// 		console.log(getBoilTime());
// 		if(this._enabled) {
// 			setTimeout(function() {
// 				console.log('ready');
// 				self.disable();
// 			}, getBoilTime());			
// 		} else {
// 			throw new Error('Error3');
// 		}
// 	};

// 	let parentEnable = this.enable;

// 	this.enable = function() {
// 		parentEnable.call(this);
// 		this.run();
// 	}
// }

// let coffee = new Coffee(100000);

// if(coffee.getWaterAmount() <= 0) {
// 	coffee.setWaterAmount(1000);
// }

// console.log(coffee);

// coffee.enable();
// coffee.run();
// coffee.disable();

