describe('CancelButton', function() {
	it('Cancel button click takes back to index', function() {
		loadFixtures('form.html');
		
		var button = new CancelButton(); 
		$('#cancelButton').trigger('click');
		
		expect('click').toHaveBeenTriggeredOn('#cancelButton');
		expect(spyOn(button, '_redirect')).toHaveBeenCalledWith('/');
	});
});