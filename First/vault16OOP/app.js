

function Machine(power) {
	this._power = power;
	this._enabled = false;
	this.enable = function() {
		this._enabled = true;
	};

	this.disable = function() {
		console.log('disabled')
		this._enabled = false;
	}
}



function Coffee(power) {
	Machine.call(this, power);

	// let power = 100;
	let waterAmount = 0;
	const CAPACITY = 1000;
	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error('Error1')
		} 

		if (amount > CAPACITY) {
			throw new Error('Error2')
		}

		waterAmount = amount;
	}

	this.getWaterAmount = function() {
		return waterAmount;
	}

	// let getBoilTime = function() {
	// 	return 4200 * this.waterAmount *80/ power;
	// }.bind(this);

	let self = this;
	function getBoilTime() {
		return 4200 * waterAmount *80/ self._power;
	}

	this.run = function() {
		console.log(getBoilTime());
		if(this._enabled) {
			setTimeout(function() {
				console.log('ready');
				self.disable();
			}, getBoilTime());			
		} else {
			throw new Error('Error3');
		}
	};

	let parentEnable = this.enable;

	this.enable = function() {
		parentEnable.call(this);
		this.run();
	}
}

let coffee = new Coffee(100000);

if(coffee.getWaterAmount() <= 0) {
	coffee.setWaterAmount(1000);
}

console.log(coffee);

coffee.enable();
// coffee.run();
// coffee.disable();

