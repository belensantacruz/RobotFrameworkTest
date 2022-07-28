const {Builder, By, Key} = require("selenium-webdriver");
const should = require('chai').should();

//describe block
describe("Login page", function(){
    //it block
    it("Login and check navigation to products", async function(){
        //Launch the browser
        let driver = await new Builder().forBrowser("chrome").build();
        //Navigate to our application
        await driver.get("http://www.saucedemo.com");
        //Add a To Do
        await driver.findElement(By.id("user-name")).sendKeys("standard_user", Key.TAB);
        await driver.findElement(By.id("password")).sendKeys("secret_sauce", Key.RETURN);
        var title = await driver.findElement(By.xpath("//span[contains(@class, 'title')]")).getText().then(function(value){
            return value;
        });
        //Assert using chai assertion (should)
        title.should.equal("PRODUCTS");
        //Close driver
        await driver.quit();
    });
});