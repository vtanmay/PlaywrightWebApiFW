import {test, expect} from '../src/fixtures/pagefixtures';

test.beforeEach(async({loginPage})=> {
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
})

test('verify all h2 headers', async({homePage}) => {
   let allH2Headers = await homePage.retrieveHeaders();
   expect(allH2Headers).toEqual([
    'My Account',
    'My Orders',
    'My Affiliate Account',
    'Newsletter'
   ])
})