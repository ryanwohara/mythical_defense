function Giant (x, y) {
	var canvas = document.getElementById('canvas');
	this.context = canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.width = 30;
	this.height = 90;
	this.headDiameter = 7;
	this.hp = 300;
}

Giant.prototype.move = function(x, y) {
	this.x = x;
	this.y = y;
}

Giant.prototype.draw = function() {
	this.context.beginPath();

	this.context.arc(this.x, this.y + this.height, this.headDiameter, 0, 360, 0);
	this.context.fill();
	this.context.stroke();

	this.context.moveTo(this.x, this.y + this.height - this.headDiameter / 2);
	// Torso
	this.context.fillRect(this.x - this.headDiameter / 3, this.y + this.height - this.headDiameter - 1, this.width / 5, this.height * -1/2);

	// Right arm (from our perspective)
	this.context.moveTo(this.x + this.headDiameter / 3, this.y + this.height - this.headDiameter);
	this.context.lineTo(this.x + this.width / 3 + 3, this.y);
	this.context.lineTo(this.x + this.width / 3, this.y + 2);
	this.context.lineTo(this.x + this.headDiameter / 3, this.y + this.height - this.headDiameter);
	this.context.fill();
	this.context.stroke();

	// Left arm
	this.context.moveTo(this.x - this.headDiameter / 3, this.y + this.height - this.headDiameter);
	this.context.lineTo(this.x - this.width / 3 - 3, this.y);
	this.context.lineTo(this.x - this.width / 3, this.y + 2);
	this.context.lineTo(this.x - this.headDiameter / 3, this.y + this.height - this.headDiameter);
	this.context.fill();
	this.context.stroke();

	// Left leg
	this.context.moveTo(this.x - this.headDiameter / 3, this.y + this.height * 3/7);
	this.context.lineTo(this.x - this.width / 2, this.y);
	this.context.lineTo(this.x - this.width * 2 / 5, this.y);
	this.context.lineTo(this.x, this.y + this.height * 3/7);
	this.context.fill();
	this.context.stroke();

	// Right leg
	this.context.moveTo(this.x + this.headDiameter / 3, this.y + this.height * 3/7);
	this.context.lineTo(this.x + this.width / 2, this.y);
	this.context.lineTo(this.x + this.width * 2 / 5, this.y);
	this.context.lineTo(this.x, this.y + this.height * 3/7);
	this.context.fill();
	this.context.stroke();

	this.context.closePath();
}