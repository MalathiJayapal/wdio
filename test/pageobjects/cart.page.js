const elementUtil=require('../util/elementUtil');

class CartPage{
  
    get labelCart () { return $('//span[text()="Your Cart"]');}
    get productInCart () { return $('.inventory_item_name');}
    get priceInCart () { return $('.inventory_item_price');}
    get checkout () {return $('#checkout'); }

    clickCheckout(){
       return elementUtil.doClick(this.checkout);
    }
}

module.exports = new CartPage();
