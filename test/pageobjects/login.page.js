const elementUtil=require('../util/elementUtil');

const Page = require('./page');
class LoginPage extends Page {
    get inputUsername () { return $('#user-name');}
    get inputPassword () { return $('#password');}
    get btnSubmit () { return $('#login-button');}

    clickSubmit(){
        return elementUtil.doClick(this.btnSubmit);
     }
    get errMessage () { return $('//h3[@data-test="error"]');    }
    
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    open () {
        return super.open('login');
    }

}

module.exports = new LoginPage();
