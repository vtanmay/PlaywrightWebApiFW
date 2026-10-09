import {test, Page, expect} from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { HomePage } from '../src/pages/HomePage';
import { log } from 'console';

let loginPage : LoginPage;
let homePage : HomePage;

test.beforeEach(async({page})=> {
    loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.doLogin('vaidya.tanmay4@gmail.com', 'Aitester@2026');
    homePage = new HomePage(page);
})

test('verify all h2 headers', async() => {
   let allH2Headers = await homePage.retrieveHeaders();
   expect(allH2Headers).toEqual([
    'My Account',
    'My Orders',
    'My Affiliate Account',
    'Newsletter'
   ])
})