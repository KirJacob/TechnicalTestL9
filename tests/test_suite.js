// JASMINE VERSION

var utils = require('../utils.js');
var mainPage = require('../pages/mainPage.js');

describe('Test Suite for Computer database site', function() {
		
	beforeEach(function () {
    	browser.waitForAngularEnabled(false);
		browser.get(utils.url);
    });

	it('should be possible to add computer', function() {
		const pcNameOne = 'AAAAA my pc for create';
		const alertMsgTxt = 'Done! Computer ' + pcNameOne 
			+ ' has been created';

		mainPage.createComputer(pcNameOne, 'Sony');
		mainPage.verifyComputerPresent(pcNameOne, 1);

		expect(mainPage.pcTable.alertMsg.getText())
			.toEqual(alertMsgTxt);
		mainPage.deleteComputer(pcNameOne);
	});

	it('should be possible to update computer', function() {
		const pcNameTwo = 'AAAAA my pc for update';
		const pcNameTwoEdited = pcNameTwo + " Edited";

		mainPage.createComputer(pcNameTwo, 'Sony');
		mainPage.clickSelectedComputer(pcNameTwo);
		mainPage.pcForm.nameFld.clear();
		mainPage.pcForm.nameFld.sendKeys(pcNameTwoEdited);
		mainPage.pcForm.saveBtn.click();

		mainPage.verifyComputerPresent(pcNameTwoEdited, 1);
		mainPage.deleteComputer(pcNameTwo);
	});

	it('should be possible to delete computer', function() {
		const pcNameThree = 'AAAAA my pc for removal';

		mainPage.createComputer(pcNameThree, 'Sony');
		mainPage.deleteComputer(pcNameThree);

		mainPage.verifyComputerPresent(pcNameThree, 0);
	});

	it('check filter by computer', function() {
		const pcNameFour = "ZAAAA my pc for filter";

		mainPage.createComputer(pcNameFour, 'Sony');
		mainPage.filterComputer(pcNameFour);
		mainPage.verifyComputerPresent(pcNameFour, 1);
		mainPage.deleteComputer(pcNameFour);
	});

	// it('', function() {
	// });
});