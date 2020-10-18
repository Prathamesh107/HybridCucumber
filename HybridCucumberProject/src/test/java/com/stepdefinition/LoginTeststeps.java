package com.stepdefinition;

import com.pages.LoginPage;

import BaseClass.Library;
import SeleniumUtility.SeleniumReusable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginTeststeps extends Library {
	LoginPage lpage;
	SeleniumReusable util;

	@Given("To Launch the browser and navigate to the URL")
	public void to_Launch_the_browser_and_navigate_to_the_URL() {
		browserSetUp();
		logger.info("*******Browser Launched*********");

	}

	@When("To enter {string} and {string}")
	public void to_enter_and(String username, String p) {
	

		lpage = new LoginPage(driver);
		lpage.Login(username, password);
		logger.info("*******Enter username and password*********");
	}

	@Then("To click the submit button")
	public void to_click_the_submit_button() {
		lpage.Submit();
	}

	@Then("To take the screenshot and close the browser")
	public void to_take_the_screenshot_and_close_the_browser() {
		util = new SeleniumReusable(driver);
		util.to_take_screenshot("./src/test/resources/Screenshots/OrangehrmLogin.png");
		logger.info("*******Screenshot Captured*********");
		tearDown();
	}
}
