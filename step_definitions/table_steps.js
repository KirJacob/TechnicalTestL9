// CUCUMBER AND CHAI VERSION

var chai = require('chai');
var utils = require('../utils.js');
var generalPage = require('../pages/generalPage.js');
var tablePage = require('../pages/tablePage.js');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
var counter ="a";

module.exports = function() {

	this.When(/^I click add new computer$/, function () {
		tablePage.addComputerBtn.click();
	});

	this.When(/^I enter filter "([^"]*)"$/, function(name) {
		tablePage.searchFld.sendKeys(name);	
	});

	this.When(/^I click Filter by name$/, function () {
		tablePage.filterBtn.click();
	});

	this.When(/^I click next button$/, function () {
		element(by.css('.next>a')).click();
	});

	this.When(/^I click previois button$/, function () {
		element(by.css('.prev>a')).click();
	});

	this.When(/^I click header$/, function () {
		element(by.css('.fill>a')).click();
	});

	this.When(/^I open computer with name "([^"]*)"$/, function (name) {
		generalPage.clickSelectedComputer(name);
	});

	this.Then(/^I should see computers with "([^"]*)" value$/, function(value) {
		expect(tablePage.pcCountFld.getText()).to.eventually.have.string(value + ' computers found');		
	});

	this.Then(/^I should see introduced date "([^"]*)" for name "([^"]*)"$/, function (intDate, name) {
		var locator = "(//*[contains(text(), '" + name + "')]/../..//td)[2]"
		var webElement = browser.findElement(by.xpath(locator));
		expect(webElement.getText()).to.eventually.equal(intDate);
	});

	this.Then(/^I should see discontinued date "([^"]*)" for name "([^"]*)"$/, function (disDate, name) {
		var locator = "(//*[contains(text(), '" + name + "')]/../..//td)[3]"
		var webElement = browser.findElement(by.xpath(locator));
		expect(webElement.getText()).to.eventually.equal(disDate);
	});

	this.Then(/^I should see company "([^"]*)" for name "([^"]*)"$/, function (company, name) {
		var locator = "(//*[contains(text(), '" + name + "')]/../..//td)[4]"
		var webElement = browser.findElement(by.xpath(locator));
		expect(webElement.getText()).to.eventually.equal(company);
	});

	this.Then(/^I should see main page$/, function () {
		expect(tablePage.pcCountFld.getText()).to.eventually.have.string('computers found');
	});

}