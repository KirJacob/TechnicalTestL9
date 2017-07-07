// CUCUMBER AND CHAI VERSION

var chai = require('chai');
var utils = require('../../utils.js');
var mainPage = require('../../pages/mainPage.js');
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
		mainPage.createComputer(name, company);
		this.pcName = name;
		this.alertMsgTxt = 'Done! Computer ' + name + ' has been created';
	});

	this.Then(/^I should see computer "([^"]*)" in the table (\d+) times$/, function(name,cnt) {
		let countElement = element.all(by.cssContainingText('a', name)).count();
		expect(countElement).to.eventually.equal(parseInt(cnt));
	});

	this.Then(/^I should see message about creation$/, function() {
		expect(mainPage.pcTable.alertMsg.getText())
			.to.eventually.equal(this.alertMsgTxt);
	});

	this.When(/^I remove computer$/, function() {
		mainPage.deleteComputer(this.pcName);
	});

	this.When(/^I update computer "([^"]*)" to "([^"]*)"$/, function(name, newName) {
		mainPage.clickSelectedComputer(name);
		mainPage.pcForm.nameFld.clear();
		mainPage.pcForm.nameFld.sendKeys(newName);
		mainPage.pcForm.saveBtn.click();
		this.pcName = newName;
	});

	this.When(/^I filter computer "([^"]*)"$/, function(name) {
		mainPage.filterComputer(name);
	});

}