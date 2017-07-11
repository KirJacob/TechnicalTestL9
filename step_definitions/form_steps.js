// CUCUMBER AND CHAI VERSION

var chai = require('chai');
var utils = require('../utils.js');
var generalPage = require('../pages/generalPage.js');
var formPage = require('../pages/formPage.js');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

	this.When(/^I click create this computer$/, function () {
		formPage.saveBtn.click();
	});

	this.When(/^I enter name "([^"]*)"$/, function (name) {
		formPage.nameFld.sendKeys(name);
	});

	this.When(/^I enter introduced date "([^"]*)"$/, function (intDate) {
		formPage.introducedFld.clear();
		formPage.introducedFld.sendKeys(intDate);
	});
	
	this.When(/^I enter discontinued date "([^"]*)"$/, function (disDate) {
		formPage.discontinuedFld.clear();
		formPage.discontinuedFld.sendKeys(disDate);
	});

	this.When(/^I enter company "([^"]*)"$/, function (company) {
		formPage.companyFld.element(by.cssContainingText('option',company)).click();
	});
	
	this.When(/^I click save this computer$/, function () {
		formPage.saveBtn.click();
	});
	
	this.When(/^I click cancel$/, function () {
		formPage.cancelBtn.click();
	});

	this.Then(/^I should see Required warning message$/, function () {
		expect(formPage.warningFld.getText())
			.to.eventually.equal('Required');
	});
}