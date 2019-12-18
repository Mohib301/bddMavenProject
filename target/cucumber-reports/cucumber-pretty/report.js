$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tekshoolpage.feature");
formatter.feature({
  "line": 1,
  "name": "open tek school of america",
  "description": "",
  "id": "open-tek-school-of-america",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "open test environment from tekshool website",
  "description": "",
  "id": "open-tek-school-of-america;open-test-environment-from-tekshool-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tekschool_001"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User should be open tek school of america web site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User click test environment",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should be in the test environment page",
  "keyword": "Then "
});
formatter.match({
  "location": "tekshoolStepDefinitions.user_should_be_open_tek_school_of_america_web_site()"
});
formatter.result({
  "duration": 283884690,
  "status": "passed"
});
formatter.match({
  "location": "tekshoolStepDefinitions.user_click_test_environment()"
});
formatter.result({
  "duration": 2750678,
  "error_message": "java.lang.NullPointerException\r\n\tat PageObjects.tekSchoolPageObjects.clickOnTestEnvironment(tekSchoolPageObjects.java:16)\r\n\tat stepDefinitions.tekshoolStepDefinitions.user_click_test_environment(tekshoolStepDefinitions.java:23)\r\n\tat ✽.When User click test environment(tekshoolpage.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "tekshoolStepDefinitions.user_should_be_in_the_test_environment_page()"
});
formatter.result({
  "status": "skipped"
});
});