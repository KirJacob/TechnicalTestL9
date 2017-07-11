// CUCUMBER AND CHAI VERSION

var chai = require('chai');
var utils = require('../utils.js');
var generalPage = require('../pages/generalPage.js');
var formPage = require('../pages/formPage.js');
var tablePage = require('../pages/tablePage.js');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

	this.pcName = "";
	this.alertMsgTxt = "";

	this.Given(/^I am on the main page$/, function () {
        browser.waitForAngularEnabled(false);
		browser.get(utils.url);
    });

	this.When(/^I create new computer "([^"]*)" with company "([^"]*)"$/, function(name, company) {
		generalPage.createComputer(name, company);
		this.pcName = name;
		this.alertMsgTxt = 'Done! Computer ' + name + ' has been created';
	});

	this.When(/^I create new computer "([^"]*)"$/, function(name) {
		tablePage.addComputerBtn.click();
		formPage.nameFld.sendKeys(name);
		formPage.saveBtn.click();
	});

	this.Then(/^I should see computer "([^"]*)" in the table (\d+) times$/, function(name,cnt) {
		let countElement = element.all(by.cssContainingText('a', name)).count();
		expect(countElement).to.eventually.equal(parseInt(cnt));
	});

	this.Then(/^I should see message about creation$/, function() {
		expect(tablePage.alertMsg.getText())
			.to.eventually.equal(this.alertMsgTxt);
	});

	this.When(/^I remove computer$/, function() {
		generalPage.deleteComputer(this.pcName);
	});

	this.When(/^I remove computer "([^"]*)"$/, function (name) {
		element(by.cssContainingText('a', name)).click();	
		formPage.deleteBtn.click();
	});

	this.When(/^I update computer "([^"]*)" to "([^"]*)"$/, function(name, newName) {
		generalPage.clickSelectedComputer(name);
		formPage.nameFld.clear();
		formPage.nameFld.sendKeys(newName);
		formPage.saveBtn.click();
		this.pcName = newName;
	});

	this.When(/^I filter computer "([^"]*)"$/, function(name) {
		generalPage.filterComputer(name);
		this.pcName = name;
	});
}