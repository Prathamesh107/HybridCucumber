Feature: To Verify The Orangehrm Application

Scenario Outline: To test the login functionality of Orangehrm
Given  To Launch the browser and navigate to the URL
When  To enter "<username>" and "<password>"
Then  To click the submit button
Then  To take the screenshot and close the browser

Examples:
|username|password|
|Admin|admin123|
|user|hrm123|