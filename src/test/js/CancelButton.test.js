describe('CancelButton', function() {
	it('Cancel button click takes back to index', function() {
		loadFixtures('form.html');
		//var button = new CancelButton();
		spyOn(new CancelButton(),'_redirect');
		new CancelButton()._initCancelButton();

		$('#cancelButton').trigger('click');

		expect(new CancelButton()._redirect).toHaveBeenCalledWith('/');
	});
});