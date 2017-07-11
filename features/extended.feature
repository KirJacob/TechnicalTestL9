# # # #features/extended.feature
Feature: Extended Tests for Computers
	As a non registred user of site "http://computer-database.herokuapp.com/"
	I should be able to test extended test

	Scenario: Computer name field is obligatory
		Given I am on the main page
		When I click add new computer
		When I click create this computer
		Then I should see Required warning message
		When I click cancel
	
	Scenario: Can cancel opening form
		Given I am on the main page
		When I click add new computer
		When I click cancel
		Then I should see main page

	Scenario: Can click next page and back
		Given I am on the main page
		When I create new computer "AAA my pc for paging"
		When I click next button
		Then I should see computer "AAA my pc for paging" in the table 0 times
		When I click previois button
		Then I should see computer "AAA my pc for paging" in the table 1 times
		When I remove computer "AAA my pc for paging"

	Scenario: Can back to first page by clicking header
		Given I am on the main page
		When I create new computer "AAA my pc for increment"
		When I click next button
		When I click header
		Then I should see computer "AAA my pc for increment" in the table 1 times
		When I remove computer "AAA my pc for increment"

	Scenario: Message that N - computers are found is shown
		Given I am on the main page
		When I create new computer "AAA my pc for filter count"
		When I create new computer "AAA1 my pc for filter count"
		When I create new computer "AAA2 my pc for filter count"
		When I enter filter "AAA"
		When I click Filter by name
		Then I should see computers with "3" value
		When I remove computer "AAA my pc for filter count"
		When I remove computer "AAA1 my pc for filter count"
		When I remove computer "AAA2 my pc for filter count"

	Scenario: Other than names fields are shown in table
		Given I am on the main page
		When I click add new computer
		When I enter name "AAA pc name"
		When I enter introduced date "2017-07-10"
		When I enter discontinued date "2017-07-14"
		When I enter company "Sony"
		When I click create this computer
		Then I should see introduced date "10 Jul 2017" for name "AAA pc name"
		Then I should see discontinued date "14 Jul 2017" for name "AAA pc name"
		Then I should see company "Sony" for name "AAA pc name"
		When I remove computer "AAA pc name"

	Scenario: Other than names fields can be updated
		Given I am on the main page
		When I create new computer "AAA pc name" with company "Sony"
		When I open computer with name "AAA pc name"
		When I enter introduced date "2017-06-10"
		When I enter discontinued date "2017-06-14"
		When I enter company "Canon"
		When I click save this computer
		Then I should see introduced date "10 Jun 2017" for name "AAA pc name"
		Then I should see discontinued date "14 Jun 2017" for name "AAA pc name"
		Then I should see company "Canon" for name "AAA pc name"
		When I remove computer "AAA pc name"

	Scenario: Edit company can be canceled
		Given I am on the main page
		When I create new computer "AAA my pc for cancel edit" with company "Sony"
		When I open computer with name "AAA my pc for cancel edit"
		When I enter introduced date "2017-06-10"
		When I enter discontinued date "2017-06-14"
		When I enter company "Canon"
		When I click cancel
		Then I should see introduced date "07 Jul 2017" for name "AAA my pc for cancel edit"
		Then I should see discontinued date "14 Jul 2017" for name "AAA my pc for cancel edit"
		Then I should see company "Sony" for name "AAA my pc for cancel edit"
		When I remove computer "AAA my pc for cancel edit"

