
var nameOnLoad = document.forms["infosystem-form"]["name"].value;
var shortNameOnLoad = getInputValue("infosystem-form", "shortName");
var documentationOnLoad = getInputValue("infosystem-form", "documentation");
var objectiveOnLoad = getInputValue("infosystem-form", "objective");

console.log(nameOnLoad);
function cancel() {
	var name = getInputValue("infosystem-form", "name");
	var shortName = getInputValue("infosystem-form", "shortName");
	var documentation = getInputValue("infosystem-form", "documentation");
	var objective = getInputValue("infosystem-form", "objective");
	console.log(nameOnLoad);
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

function getInputValue(formName, inputName) {
	return document.forms[formName][inputName].value;
}