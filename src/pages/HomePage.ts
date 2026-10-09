import { Locator, Page } from "playwright/test";
import { BasePage } from "./BasePage";


export class HomePage extends BasePage{
    
    // private and readonly locators.

    private readonly logoutLink : Locator;
    private readonly heading : Locator;
    private readonly myOrdersHeading : Locator;
    private readonly searchBox : Locator;
    private readonly searchBtn : Locator;

    // constructor to initialize these locators.
    constructor(page : Page){
        super(page);
        this.logoutLink = page.getByRole('link', {name:'Logout'});
        this.heading = page.getByRole('heading', {level:2});
        this.myOrdersHeading =  page.getByRole('heading', {name:'My Orders'});
        this.searchBox = page.getByRole('textbox', {name: 'Search', exact:true});
        this.searchBtn = page.locator('.btn.btn-default.btn-lg');
    }

    // public methods for HomePage.
    async isLogoutLinkAvailable() : Promise<boolean> {
        return await this.logoutLink.isVisible();
    }

    async retrieveHeaders() : Promise<string[]> {
        return await this.heading.allInnerTexts();
    }

    async isOrdersHeadingAvailable(){
        return await this.myOrdersHeading.isVisible();
    }

    async selectSearchBtn() : Promise<void> {
        await this.searchBtn.click();
    }

    async enterProductName(productName : string): Promise<void> {
        await this.searchBox.fill(productName);
    }
}
