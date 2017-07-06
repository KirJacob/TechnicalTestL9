var utils = require('../utils.js');
var mainPage = require('../pages/mainPage.js');

describe('Test Suite for Computer database site', function() {
		
	beforeEach(function () {
    	browser.waitForAngularEnabled(false);
		browser.get(utils.url);
    });

	// function filterComputer(name){
	// 	element(by.id('searchbox')).sendKeys(name);
	// 	element(by.id('searchsubmit')).click();
	// }

	it('should be possible to add computer', function() {
		var pcNameOne = 'AAAAA my pc create';
		var alertMsgTxt = 'Done! Computer ' + pcNameOne 
			+ ' has been created';

		mainPage.createComputer(pcNameOne, 'Sony');
		mainPage.verifyComputerPresent(pcNameOne, 1);

		expect(mainPage.pcTable.alertMsg.getText())
			.toEqual(alertMsgTxt);
		mainPage.deleteComputer(pcNameOne);
	});

	it('should be possible to update computer', function() {
		var pcNameTwo = 'AAAAA my pc for update';
		var pcNameTwoEdited = pcNameTwo + " Edited";

		mainPage.createComputer(pcNameTwo, 'Sony');
		mainPage.clickSelectedComputer(pcNameTwo);
		mainPage.pcForm.nameFld.clear();
		mainPage.pcForm.nameFld.sendKeys(pcNameTwoEdited);
		mainPage.pcForm.saveBtn.click();

		mainPage.verifyComputerPresent(pcNameTwoEdited, 1);
		mainPage.deleteComputer(pcNameTwo);
	});

	it('should be possible to delete computer', function() {
		var pcNameThree = 'AAAAA my pc for removal';

		mainPage.createComputer(pcNameThree, 'Sony');
		mainPage.deleteComputer(pcNameThree);

		mainPage.verifyComputerPresent(pcNameThree, 0);
	});

	it('check filter by computer', function() {
		var pcNameFour = "ZAAAA my pc for filter";

		mainPage.createComputer(pcNameFour, 'Sony');
		mainPage.filterComputer(pcNameFour);
		mainPage.verifyComputerPresent(pcNameFour, 1);
		mainPage.deleteComputer(pcNameFour);
	});

	// it('', function() {
	// });
});