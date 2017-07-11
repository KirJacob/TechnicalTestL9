'use strict';
var formPage = require('./formPage.js');
var tablePage = require('./tablePage.js');

module.exports = {
	createComputer: function(name, company) {
		tablePage.addComputerBtn.click();
		formPage.nameFld.sendKeys(name);
		formPage.introducedFld.sendKeys("2017-07-07");
		formPage.discontinuedFld.sendKeys("2017-07-14");
		formPage.companyFld.element(by.cssContainingText('option',company)).click();
		formPage.saveBtn.click();
	},
	verifyComputerPresent: function(name, count) {
		let countElement = element.all(by.cssContainingText('a', name)).count();
		expect(countElement).toEqual(count);
	},
	clickSelectedComputer: function(name) {
		element(by.cssContainingText('a', name)).click();		
	},
	deleteComputer: function(name) {
		element(by.cssContainingText('a', name)).click();	
		formPage.deleteBtn.click();
	},
	filterComputer: function(name){
		tablePage.searchFld.sendKeys(name);
		tablePage.filterBtn.click();
	},
};