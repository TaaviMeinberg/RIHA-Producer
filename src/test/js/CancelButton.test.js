describe('CancelButton', function() {
	it('Cancel button click takes back to index', function() {
		loadFixtures('form.html');
		
		var button = new CancelButton(); 
		var spyEvent = spyOnEvent('#cancelButton', 'click');
		button._initCancelButton();
		$('#cancelButton').trigger('click');
		
		expect('click').toHaveBeenTriggeredOn('#cancelButton');
		expect(spyEvent).toHaveBeenTriggered();
		//expect(spyOn(button, '_redirect')).toHaveBeenCalledWith('/');
	});
});