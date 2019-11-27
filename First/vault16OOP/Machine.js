function Machine(power) {
	this._power = power;
	this._enabled = false;

	this.enable = function() {
		this._enabled = true;
	}

	this.disable = function() {
		this._enabled = false;
	}
}
