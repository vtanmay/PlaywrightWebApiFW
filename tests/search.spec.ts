import {test, expect} from '../src/fixtures/pagefixtures';

test.beforeEach(async({loginPage})=> {
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
})

test('verify serarch page loads with results', async({homePage, searchResultsPage, page})=>{
    await homePage.enterProductName('macbook');
    await homePage.selectSearchBtn();
    //await page.pause();
    expect(await searchResultsPage.getSearchResultscount()>=1);
})

