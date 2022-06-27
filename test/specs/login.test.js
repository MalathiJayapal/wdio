const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const LoginData = require('../testdata/login')

// Positive Scenario TC
describe('Login', () => {
    it('Valid Credentials', async () => {
       // await LoginPage.open();
        browser.url('/');
        await LoginPage.login(LoginData.username, LoginData.password);
        await expect(InventoryPage.headerCheck).toBeExisting();
        await expect(InventoryPage.headerCheck).toHaveTextContaining('PRODUCTS');
        await expect(InventoryPage.itemBackpack).toBeExisting();
        

    });
});
//Negative Scenario TC
describe('Login', () => {
    it('Invalid Credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(LoginData.username, 'Test_pwd');
      //  LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
       await expect(LoginPage.errMessage).toBeExisting();
       await expect(LoginPage.errMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
    });
});

describe('Login', () => {
    it('Empty Credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('', '');
        await expect(LoginPage.errMessage).toBeExisting();
        await expect(LoginPage.errMessage).toHaveTextContaining('Epic sadface: Username is required');
    });
});


describe('Login', () => {
    it('Empty Password', async () => {
        await LoginPage.open();
        await LoginPage.login(LoginData.username, '');
        await expect(LoginPage.errMessage).toBeExisting();
        await expect(LoginPage.errMessage).toHaveTextContaining('Epic sadface: Password is required');
    });
});

describe('Login', () => {
    it('Empty Username', async () => {
        await LoginPage.open();
        await LoginPage.login('', LoginData.password);
        await expect(LoginPage.errMessage).toBeExisting();
        await expect(LoginPage.errMessage).toHaveTextContaining('Epic sadface: Username is required');
    });
});
