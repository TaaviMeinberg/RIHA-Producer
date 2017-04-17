"use strict";

function CancelButton() {

	var self = this;

	self.init = function() {
		self._initCancelButton();
	};

	self._redirect = function(url) {
		window.location = url;
	};

	self._getInputValue = function(inputID) {
		console.log(document.getElementById(inputID).value);
		return document.getElementById(inputID).value;
	};

	var nameOnLoad = self._getInputValue("name");
	var shortNameOnLoad = self._getInputValue("short-name");
	var documentationOnLoad = self._getInputValue("documentation");
	var objectiveOnLoad = self._getInputValue("objective");

	self._initCancelButton = function() {
		$('#cancelButton').on('click',function() {
							var name = self._getInputValue("name");
							var shortName = self._getInputValue("short-name");
							var documentation = self._getInputValue("documentation");
							var objective = self._getInputValue("objective");

							if ((name == "" || name == nameOnLoad)
									&& (shortName == "" || shortName == shortNameOnLoad)
									&& (documentation == "" || documentation == documentationOnLoad)
									&& (objective == "" || objective == objectiveOnLoad)) {
								self._redirect('/');
							} else {
								if (confirm("Kas kindlasti soovid katkestada?")) {
									self._redirect('/');
								}
							}

						});
	};
}