function Buttons() {};

Buttons.prototype.pause = document.createElement('button');
Buttons.prototype.pause.innerHTML = 'pause';
Buttons.prototype.pause.onclick = function() {
	proceed = false;
};

Buttons.prototype.play = document.createElement('button');
Buttons.prototype.play.innerHTML = 'play';
Buttons.prototype.play.onclick = function() {
	proceed = true;
	redraw();
};

Buttons.prototype.restart = document.createElement('button');
Buttons.prototype.restart.innerHTML = 'restart';
Buttons.prototype.restart.onclick = function() {
	restart();
};

Buttons.prototype.fire = document.createElement('button');
Buttons.prototype.fire.innerHTML = 'fire';
Buttons.prototype.fire.onclick = function() {
	// fire(); TODO
};

Buttons.prototype.add = function(container) {
	container.appendChild(document.createElement('br'));
	container.appendChild(Buttons.prototype.fire);
	container.appendChild(Buttons.prototype.play);
	container.appendChild(Buttons.prototype.pause);
	container.appendChild(Buttons.prototype.restart);
};