describe('CancelButton', function() {
	it('Cancel button click takes back to index', function() {
		loadFixtures('form.html');
		var producer = new CancelButton();
	    spyOn(producer, '_redirect');
	    producer._initCancelButton();

	    $('#infosystem-form').find('button.edit').trigger('click');

	    expect(producer._redirect).toHaveBeenCalledWith('/');
	});
});