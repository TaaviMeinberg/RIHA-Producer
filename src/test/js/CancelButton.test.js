describe('CancelButton', function() {
	it('Cancel button click takes back to index', function() {
		loadFixtures('form.html');
		var CancelButton = new CancelButton();
		spyOn(CancelButton, '_redirect');
		CancelButton._initCancelButton();

		$('#cancelButton').trigger('click');

		expect(CancelButton._redirect).toHaveBeenCalledWith('/');
	});
});