const elementUtil=require('../util/elementUtil');

const Page = require('./page');

class InventoryPage extends Page {
 
    get headerCheck () { return $('//*[@class="title"]'); }
    get itemBackpack () { return $('//*[text()="Sauce Labs Backpack"]');}
    get parent () { return $('.inventory_item_label');}
    get childElement(){ return this.parent.$$('div');}
    get getTextForItem(){ return this.childElement.filter(element=>{ console.log(element.getText())});}
    get itemDescription () { return $('//div[text()="Sauce Labs Backpack"]/parent::a[@href="#""]/following-sibling::div[@class="inventory_item_desc"]');}
    get btnAddToCart() { return $('#add-to-cart-sauce-labs-backpack');}
    get shoppingCart(){ return $('//span[text()="1" and @class="shopping_cart_badge"]');}    //to validate multiple xpath attributes
    get price(){ return $('(//*[@class="inventory_item_price"])[1]');}
    get btnRemove() { return $('#remove-sauce-labs-backpack');    }
    
    clickAddToCart(){
        return elementUtil.doClick(this.btnAddToCart);
     }
    clickShoppingCart(){
        return elementUtil.doClick(this.shoppingCart);
     }

}

module.exports = new InventoryPage();
