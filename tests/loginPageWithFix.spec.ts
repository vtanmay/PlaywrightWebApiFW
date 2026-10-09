import {test, expect} from '../src/fixtures/pagefixtures';
import { CsvHelper } from '../utils/csvHelper';
import { JsonHelper } from '../utils/jsonHelper';

test.beforeEach(async({loginPage})=> {
    await loginPage.goToLoginPage();
})

test('verify successful login flow', async({loginPage, homePage})=> {
    loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
    // assert 
    //await loginPage.pause();
    expect(homePage.isOrdersHeadingAvailable()).toBeTruthy();
})

test('verify login page title', async({loginPage})=> {
    const pageTitle  = await loginPage.getLoginPageTitle();
    // assert
    expect(pageTitle).toBe('Account Login');
})
// let testData = CsvHelper.readCsv('src/data/loginData.csv');
let testData = CsvHelper.readCsv('src/data/invalidLoginData.csv');
for(let row of testData){
    test(`validate invalid login workflow from csv with ${row.username} and ${row.password}`, async({loginPage})=> {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isLoginErrorDisplayed()).toBeTruthy();
    })
}

// testing data driven using JSON file.
let invalidLoginData = JsonHelper.readJson('src/data/wrongLoginData.json');
for(let r of invalidLoginData){
    test(`validate invalid login workflow from json with ${r.username} and ${r.password}`, async({loginPage})=> {
        await loginPage.doLogin(r.username, r.password);
        expect(await loginPage.isLoginErrorDisplayed()).toBeTruthy();
    })
}