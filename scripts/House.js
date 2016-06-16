function House (x, y) {
	var canvas = document.getElementById('canvas');
	this.context = canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.width = 90;
	this.height = 50;
	this.hp = 100;
}

House.prototype.move = function(x, y) {
	this.x = x;
	this.y = y;
}

House.prototype.draw = function() {
	this.context.beginPath();

	this.context.fillRect(this.x, this.y, this.width, this.height);

	this.context.moveTo(this.x, this.y + this.height);
	this.context.lineTo(this.x + this.width / 2, this.y + this.height * 4 / 3);
	this.context.lineTo(this.x + this.width, this.y + this.height);
	this.context.lineTo(this.x, this.y);
	this.context.fill();
	this.context.stroke();

	this.context.closePath();
}