import {Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';


export class LoginPage extends BasePage{

    // Login page locators - decalred private and readonly
    private readonly email : Locator;
    private readonly password : Locator;
    private readonly loginBtn : Locator;
    private readonly frgtnPswdLink : Locator;
    private readonly loginErrorMsg : Locator;

    // constructor to initialize these locators.
    constructor(page : Page){
        super(page);
        this.email = page.getByRole('textbox', {name:'E-Mail Address'});
        this.password = page.getByRole('textbox', {name:'Password'});
        this.loginBtn = page.getByRole('button', {name : 'Login'});
        this.frgtnPswdLink = page.getByRole('link', {name: 'Forgotten Password'}).first();
        this.loginErrorMsg = page.getByText('Warning: No match for E-Mail Address and/or Password.', { exact: true });
    }

    // public methods / features of login page.
    // go to login page, get page title, is frgt pw link available

    async goToLoginPage(){
       await this.page.goto('opencart/index.php?route=account/login');
    }

    async getLoginPageTitle() : Promise<String> {
        return await this.page.title();
    }

    async isFrgtnPwLinkVisible() : Promise<boolean> {
        return await this.frgtnPswdLink.isVisible();
    }

    async doLogin(email : string, password : string){
       console.log(`using credentials --> ${email} and ${password}`);
       await this.email.fill(email);
       await  this.password.fill(password);
       await this.loginBtn.click();
    }

    async isLoginErrorDisplayed() : Promise<boolean> {
       return await this.loginErrorMsg.isVisible();
    }
}