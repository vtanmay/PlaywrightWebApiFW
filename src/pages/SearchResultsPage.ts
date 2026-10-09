import { BasePage } from "./BasePage";
import {Locator, Page} from '@playwright/test';


export class SearchResultsPage extends BasePage{
    // private readonly locators.

    private readonly searchResults : Locator;
    // constructor to initialize these locators. 1st step - super() call to BasePage cons.
    constructor(page : Page){
        super(page);
        this.searchResults = page.locator('div.product-layout');
    }
    // public action methods.
    async getSearchResultscount() : Promise<number> {
        return await this.searchResults.count();
    }
    // select a particular product based on product name passed. we need dynamic locator here.
    async selectProduct(productName : string) : Promise<void>{
       await this.page.getByRole('link', {name : productName, exact:true}).first().click();
    }
}