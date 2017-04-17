"use strict";

var webPage = require('webpage');
var page = webPage.create();

page.open('/Users/taavim/Documents/workspace/RIHA-Producer/src/main/resources/templates/form.html', function(status) {

var nameOnLoad = page.evaluate(function() {
	return document.getElementById("name").value;
});
var shortNameOnLoad = page.evaluate(function() {
	return document.getElementById("short-name").value;
});
var documentationOnLoad = page.evaluate(function() {
	return document.getElementById("documentation").value;
});
var objectiveOnLoad = page.evaluate(function() {
	return document.getElementById("objective").value;
});

function cancel() {
	var name = page.evaluate(function() {
		return document.getElementById("name").value;
	});
	var shortName = page.evaluate(function() {
		return document.getElementById("short-name").value;
	});
	var documentation = page.evaluate(function() {
		return document.getElementById("documentation").value;
	});
	var objective = page.evaluate(function() {
		return document.getElementById("objective").value;
	});

	if ((name == "" || name == nameOnLoad)
			&& (shortName == "" || shortName == shortNameOnLoad)
			&& (documentation == "" || documentation == documentationOnLoad)
			&& (objective == "" || objective == objectiveOnLoad)) {
		window.location = "/";
	} else {
		if (confirm("Kas kindlasti soovid katkestada?")) {
			window.location = "/";
		}
	}
}
});
/*
 * function getInputValue(inputID) { return
 * document.getElementById(inputID).value; }
 */