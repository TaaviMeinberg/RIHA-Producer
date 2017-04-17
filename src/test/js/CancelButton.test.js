describe('CancelButton', function() {
	it('Cancel button click takes back to index', function() {
		loadFixtures('form.html');
		//var button = new CancelButton();
		new CancelButton()._initCancelButton();

		$('#cancelButton').trigger('click');
		
		expect('click').toHaveBeenTriggeredOn('#cancelButton');
		expect(spyOn(new CancelButton(),'_redirect')).toHaveBeenCalledWith('/');
	});
});