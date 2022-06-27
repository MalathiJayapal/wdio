const elementUtil=require('../util/elementUtil');
class CheckOutStepTwoPage{
    
    get labelHeader () { return $('//span[text()="Checkout: Overview"]');    }
    get labelInventory () { return $('.inventory_item_name'); }
    get LabelItemTotal () { return $('.summary_subtotal_label'); }
    get LabelTax () { return $('.summary_tax_label');}
    get LabelGrandTotal () { return $('.summary_total_label');}
    get btnFinish () { return $('#finish');}


    clickFinish(){
        return elementUtil.doClick(this.btnFinish);
     }
}

module.exports = new CheckOutStepTwoPage();
