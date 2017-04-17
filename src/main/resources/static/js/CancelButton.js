"use strict";

function CancelButton() {

	var self = this;

	self.init = function() {
		self._initCancelButton();
	};

	self._redirect = function(url) {
		window.location = url;
	};
	
	self._getInputValue = function (inputID) {
		console.log(document.getElementById(inputID).value);
	    return document.getElementById(inputID).value;
	  };

	self._initCancelButton = function() {
		$('#cancelButton').on('click', function() {
			if(self._getInputValue("name")=="" || self._getInputValue("short-name")==""){
				self._redirect('/');
			} else {
				if(confirm("Kas kindlasti soovid katkestada?")){
					self._redirect('/');
				}
			}
			
		});
	};
}