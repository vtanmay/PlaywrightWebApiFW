import {test, expect} from '../src/fixtures/pagefixtures';
import { CsvHelper } from '../utils/csvHelper';

test.beforeEach(async({loginPage})=> {
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
})

// capture product data from csv.
let productData = CsvHelper.readCsv('src/data/searchProduct.csv');

// iterate through each row of data from csv.
for(let p of productData){
test(`verify serarch page loads with results for ${p.parentProduct} and ${p.subProduct}`, async({homePage, searchResultsPage, page})=>{
    await homePage.enterProductName(p.parentProduct);
    await homePage.selectSearchBtn();
    //await page.pause();
    expect(await searchResultsPage.getSearchResultscount()>=1);
})

test(`verify selecting product opens the correct product info page for ${p.parentProduct} and ${p.subProduct}`, async({homePage, searchResultsPage, productInfoPage, page})=> {
    await homePage.enterProductName(p.parentProduct);
    await homePage.selectSearchBtn();
    await searchResultsPage.selectProduct(p.subProduct);
    //await page.pause();
    expect(await productInfoPage.getProdInfoTitle()).toBe(p.subProduct);
})
}
