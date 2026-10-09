import { BasePage } from "./BasePage";
import {Locator, Page} from '@playwright/test';


export class ProductInfoPage extends BasePage{
    // private readonly locators.

    
    // constructor to initialize these locators. 1st step - super() call to BasePage cons.
    constructor(page : Page){
        super(page);
       
    }
    // public action methods.
   async getProdInfoTitle() : Promise<string> {
       return await this.page.title();
   }
}