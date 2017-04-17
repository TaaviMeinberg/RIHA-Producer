"use strict";

function CancelButton() {

	var self = this;

	self.init = function() {
		self._initCancelButton();
	};

	self._redirect = function(url) {
		window.location = url;
	};

	self._initCancelButton = function() {
		console.log(self);
		$('#cancelButton').on('click', function() {
			self._redirect('/');
		});
	};
}
