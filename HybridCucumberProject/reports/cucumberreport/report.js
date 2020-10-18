$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Testcase.feature");
formatter.feature({
  "name": "To Verify The Orangehrm Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To test the login functionality of Orangehrm",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To Launch the browser and navigate to the URL",
  "keyword": "Given "
});
formatter.step({
  "name": "To enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "To click the submit button",
  "keyword": "Then "
});
formatter.step({
  "name": "To take the screenshot and close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ]
    },
    {
      "cells": [
        "user",
        "hrm123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test the login functionality of Orangehrm",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To Launch the browser and navigate to the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinition.LoginTeststeps.to_Launch_the_browser_and_navigate_to_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter \"Admin\" and \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinition.LoginTeststeps.to_enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinition.LoginTeststeps.to_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To take the screenshot and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinition.LoginTeststeps.to_take_the_screenshot_and_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the login functionality of Orangehrm",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To Launch the browser and navigate to the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinition.LoginTeststeps.to_Launch_the_browser_and_navigate_to_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter \"user\" and \"hrm123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinition.LoginTeststeps.to_enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinition.LoginTeststeps.to_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To take the screenshot and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinition.LoginTeststeps.to_take_the_screenshot_and_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});