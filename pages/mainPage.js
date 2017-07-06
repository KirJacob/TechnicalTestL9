'use strict';

module.exports = {
	pcTable: {
		addComputerBtn: element(by.id('add')),
		alertMsg: element(by.css('.alert-message.warning')),
		searchFld: element(by.id('searchbox')),
		filterBtn: element(by.id('searchsubmit'))
	},
	pcForm: {
		nameFld: element(by.id('name')),
		introducedFld: element(by.id('introduced')),
		companyFld: element(by.id('company')),
		saveBtn: element(by.css('.primary')),
		deleteBtn: element(by.css('.danger'))
	},
	createComputer: function(name, company) {
		var pct = this.pcTable;
		var pcf = this.pcForm;
		pct.addComputerBtn.click();
		pcf.nameFld.sendKeys(name);
		pcf.introducedFld.sendKeys("2017-07-07");
		pcf.companyFld.element(by.cssContainingText('option',company)).click();
		pcf.saveBtn.click();
	},
	verifyComputerPresent: function(name, count) {
		var countElement = element.all(by.cssContainingText('a', name)).count();
		expect(countElement).toEqual(count);
	},
	clickSelectedComputer: function(name) {
		element(by.cssContainingText('a', name)).click();		
	},
	deleteComputer: function(name) {
		var pcf = this.pcForm;
		element(by.cssContainingText('a', name)).click();	
		pcf.deleteBtn.click();
	},
	filterComputer: function(name){
		var pct = this.pcTable;
		pct.searchFld.sendKeys(name);
		pct.filterBtn.click();
	}
};