var nameOnLoad = getInputValue("name");
var shortNameOnLoad = getInputValue("shortName");
var documentationOnLoad = getInputValue("documentation");
var objectiveOnLoad = getInputValue("objective");

function cancel() {
	var name = getInputValue("name");
	var shortName = getInputValue("shortName");
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
	return getElementById(inputID).value;
	//return document.forms[formName][inputName].value;
}