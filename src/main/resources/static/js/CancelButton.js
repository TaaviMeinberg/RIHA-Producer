"use strict";

var self = this;

var nameOnLoad = getInputValue("name");
var shortNameOnLoad = getInputValue("short-name");
var documentationOnLoad = getInputValue("documentation");
var objectiveOnLoad = getInputValue("objective");

function cancel() {
	var name = getInputValue("name");
	var shortName = getInputValue("short-name");
	var documentation = getInputValue("documentation");
	var objective = getInputValue("objective");

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

function getInputValue(inputID) {
	return self.getElementById(inputID).value;
}
