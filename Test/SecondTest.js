const {Builder, By, Key} = require("selenium-webdriver");
const should = require('chai').should();
//const caps = require('../capabilities').capabilities;
// LT_USERNAME = process.env.LT_USERNAME || "belensantacruz95";
// LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "l1hCX39RllagqIzjw34D4uC7nPMZyIt6RFoC78jf5a7HVlBMF1"

// var buildDriver = function(caps) {
//   return new Builder()
//     .usingServer(
//       "http://" +
//       LT_USERNAME +
//       ":" +
//       LT_ACCESS_KEY +
//       "@hub.lambdatest.com/wd/hub"
//     )
//     .withCapabilities(caps)
//     .build();
// };

//describe block
describe("Second Test - Login page", function(){
    var driver;
    beforeEach(function(){
        //Launch the browser
        // caps.name = this.currentTest.title;
        // driver = buildDriver(caps);
        driver = new Builder().forBrowser('chrome').build();
    });
    afterEach(async function(){
        //Close driver
        await driver.quit();
    });
    
    //it block
    it("First Test - Login and check navigation to products", async function(){
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
    });
    //it block
    it("Second Test - Adding new test", async function(){
        //Navigate to our application
        await driver.get("http://www.saucedemo.com");
        //Add a To Do
        await driver.findElement(By.id("user-name")).sendKeys("standard_user", Key.TAB);
        await driver.findElement(By.id("password")).sendKeys("secret_sauce", Key.RETURN);
        var title = await driver.findElement(By.xpath("//span[contains(@class, 'title')]")).getText().then(function(value){
            return value;
        });
        //Assert using chai assertion (should)
        title.should.equal("Something");
    });
});