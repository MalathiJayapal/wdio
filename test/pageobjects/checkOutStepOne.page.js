const elementUtil=require('../util/elementUtil');

class CheckOutStepOnePage{
  
    get labelheader () { return $('//span[text()="Checkout: Your Information"]'); }
    get txtFirstName () { return $('#first-name'); }
    get txtLastName () { return $('#last-name'); }
    get txtZipCode () { return $('#postal-code'); }
    get btnContinue () { return $('#continue'); }
    
    async setDetails(firstName,lasName,zipCode){
        await this.txtFirstName.setValue(firstName);
        await this.txtLastName.setValue(lasName);
        await this.txtZipCode.setValue(zipCode);
        await this.btnContinue.click();
     }

}

module.exports = new CheckOutStepOnePage();
