/*
 * This file is deprecated.
 * Please do not use.
 */

function importScript(fileName) {
	var script = document.createElement("script");
	script.src = 'scripts/' + fileName + '.js';
	script.type = "text/javascript";
	document.getElementsByTagName("body")[0].appendChild(script);
}

importScript('Person');
importScript('House');
importScript('Sasquatch');