var Buttons = function() {}

Buttons.prototype.pause = document.createElement('button');
Buttons.prototype.pause.innerHTML = 'pause';
Buttons.prototype.pause.onclick = function() {
	proceed = false;
}
Buttons.prototype.play = document.createElement('button');
Buttons.prototype.play.innerHTML = 'play';
Buttons.prototype.play.onclick = function() {
	proceed = true;
	redraw();
}

Buttons.prototype.add = function(container) {
	container.appendChild(document.createElement('br'));
	container.appendChild(Buttons.prototype.play);
	container.appendChild(Buttons.prototype.pause);
}