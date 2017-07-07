#features/test.feature
Feature: Running Cucumber with Protractor
    As a non registred user of site "http://computer-database.herokuapp.com/"
    I should be able add, remove, update and filter Computers in the table

    Scenario: Add computer Test
    	Given I am on the main page
    	When I create new computer "AAA my pc for create" with company "Sony"
        Then I should see computer "AAA my pc for create" in the table 1 times
        Then I should see message about creation
        When I remove computer

    Scenario: Update computer Test
        Given I am on the main page
        When I create new computer "AAA my pc for update" with company "Sony"
        When I update computer "AAA my pc for update" to "AAA my pc Edited"
        Then I should see computer "AAA my pc Edited" in the table 1 times
        Then I should see computer "AAA my pc for update" in the table 0 times
        When I remove computer
    
    Scenario: Delete computer Test
        Given I am on the main page
        When I create new computer "AAA my pc for delete" with company "Sony"
        When I remove computer
        Then I should see computer "AAA my pc for delete" in the table 0 times

    Scenario: Filter computer Test
        Given I am on the main page
        When I create new computer "ZAAAA my pc for filter" with company "Sony"
        When I filter computer "ZAAAA my pc for filter"
        Then I should see computer "ZAAAA my pc for filter" in the table 1 times