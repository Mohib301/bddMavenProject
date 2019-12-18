package stepDefinitions;

import PageObjects.tekSchoolPageObjects;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import main.Base;

public class tekshoolStepDefinitions extends Base {

	
	tekSchoolPageObjects test = new tekSchoolPageObjects();
	
	@Given("^User should be open tek school of america web site$")
	public void user_should_be_open_tek_school_of_america_web_site() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
	}

	@When("^User click test environment$")
	public void user_click_test_environment() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		test.clickOnTestEnvironment();
	}

	@Then("^User should be in the test environment page$")
	public void user_should_be_in_the_test_environment_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		test.TitlePageVisible();
	}
	
	
}
