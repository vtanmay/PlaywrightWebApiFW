import {Page, Locator} from '@playwright/test'

export class BasePage{

    // common locators acroos the entire web app
    protected readonly page: Page;

    constructor(page : Page){
        this.page = page;
    }

    // generic methods like isLogoVisible, fill, click

}