import {Page, test, expect} from '@playwright/test';
import {LoginPage} from '../src/pages/LoginPage';
import { HomePage } from '../src/pages/HomePage';

let loginPage : LoginPage;
let homePage : HomePage;

test.beforeEach(async({page})=> {
    loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    homePage = new HomePage(page);
})

test('verify successful login flow', async({page})=> {
    loginPage.doLogin('vaidya.tanmay4@gmail.com', 'Aitester@2026');
    // assert 
    expect(homePage.isOrdersHeadingAvailable()).toBeTruthy();
})

test('verify login page title', async({page})=> {
    const pageTitle  = await loginPage.getLoginPageTitle();
    // assert
    expect(pageTitle).toBe('Account Login');
})