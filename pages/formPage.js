'use strict';

module.exports = {
	nameFld: element(by.id('name')),
	introducedFld: element(by.id('introduced')),
	discontinuedFld: element(by.id('discontinued')),
	companyFld: element(by.id('company')),

	saveBtn: element(by.css('.primary')),
	deleteBtn: element(by.css('.danger')),
	cancelBtn: element(by.cssContainingText('a.btn','Cancel')),
	warningFld: element(by.css('.error .help-inline'))
}