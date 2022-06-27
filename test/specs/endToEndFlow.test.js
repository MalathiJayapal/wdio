//Import Test Data 
const LoginData = require('../testdata/login')
const ProductData = require('../testdata/product')
const CustomerBillingInfoData = require('../testdata/customerBillingInfo')
//Import Page Objects
const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');
const CheckOutStepOnePage = require('../pageobjects/checkOutStepOne.page');
const CheckOutStepTwoPage = require('../pageobjects/checkOutStepTwo.page');
const checkOutFinishPage = require('../pageobjects/checkOutFinish.page');
const loginPage = require('../pageobjects/login.page');
const assert = require('assert');
const elementUtil=require('../util/elementUtil');
const clickAddToCart = require('../pageobjects/cart.page');

var dynamicPrice;

// Positive Scenario TC
describe('Inventory', () => {

    it('Add to Cart', async () => {
        await LoginPage.open();
        await LoginPage.login(LoginData.username, LoginData.password);
        
        // Validate Header
        await expect(InventoryPage.headerCheck).toBeExisting();
        await expect(InventoryPage.headerCheck).toHaveTextContaining('PRODUCTS'); 

        // Validate product name = Sauce Labs Backpack
        await expect(InventoryPage.itemBackpack).toBeExisting(); 

        // Read price dynamically to validate againt checkout price
        await expect(InventoryPage.price).toBeExisting();
        dynamicPrice = InventoryPage.price.getText(); 
        InventoryPage.clickAddToCart();
        InventoryPage.btnRemove.waitForDisplayed();          
        InventoryPage.clickShoppingCart();
    });
    
    it('Cart Page', async () => {
        await expect(CartPage.labelCart).toBeExisting();
        //Validate product name in cart
        await expect(CartPage.productInCart).toBeExisting();
        expect((await CartPage.productInCart).getText()).toHaveText(ProductData.productName);

        //Validate product price in cart
        await expect(CartPage.priceInCart).toBeExisting();
        expect((await CartPage.priceInCart).getText()).toEqual(dynamicPrice);

        //click on checkout
        CartPage.clickCheckout();
    });


    /****************** USE OF CUSTOM FUNCTION IS SHOWN BELOW FOR SAMPLE**************/

        it('FirstPageCheckOut', async () => {
            await expect(CheckOutStepOnePage.labelheader).toBeExisting();
            CheckOutStepOnePage.setDetails(CustomerBillingInfoData.firstName,CustomerBillingInfoData.lastName,CustomerBillingInfoData.zipCode);
         });

        it('SecondPageCheckOut', async () => {
            // Validate Page header
            await expect(CheckOutStepTwoPage.labelHeader).toBeExisting();
            await expect(CheckOutStepTwoPage.labelInventory).toBeExisting();
            expect(await CheckOutStepTwoPage.labelInventory.getText()).toHaveText(ProductData.productName);
            //Validate Price, tax and grand total
            await expect(CheckOutStepTwoPage.LabelItemTotal).toBeExisting();
            expect((await CheckOutStepTwoPage.LabelItemTotal).getText()).toEqual(dynamicPrice);
            await expect(CheckOutStepTwoPage.LabelTax).toBeExisting();
            expect((await CheckOutStepTwoPage.LabelTax).getText()).toHaveTextContaining(ProductData.tax);
            await expect(CheckOutStepTwoPage.LabelGrandTotal).toBeExisting();
            expect((await CheckOutStepTwoPage.LabelGrandTotal).getText()).toHaveTextContaining(ProductData.grandTotal);
           // await expect(CheckOutStepTwoPage.btnFinish).toBeExisting();
            // await CheckOutStepTwoPage.btnFinish.click();
            CheckOutStepTwoPage.clickFinish();
        });
       
        it('CheckOut Complete', async () => {
            // Validate Page Header and Success Messages
            await expect(checkOutFinishPage.labelHeader).toBeExisting();
            await expect(checkOutFinishPage.labelMessage1).toBeExisting();
            expect(await checkOutFinishPage.labelMessage1.getText()).toHaveText("THANK YOU FOR YOUR ORDER");
            await expect(checkOutFinishPage.labelMessage2).toBeExisting();
            expect(await checkOutFinishPage.labelMessage2.getText()).toHaveText("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
        });
    
});