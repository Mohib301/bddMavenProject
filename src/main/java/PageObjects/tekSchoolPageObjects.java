package PageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import main.Base;

public class tekSchoolPageObjects extends Base {

	
	@FindBy(how = How.XPATH, using="//a[text()='Test Environment']")
	private WebElement clickOnTestEnvironment;
	
	public void clickOnTestEnvironment() {
		clickOnTestEnvironment.click();
	}
	@FindBy(how = How.XPATH, using="//a[text()='TEK SCHOOL']")
	private WebElement titlePageVisible;
	
	public void TitlePageVisible() {
		titlePageVisible.isDisplayed();
	}
	
	
	
	
	
	
}
