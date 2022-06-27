class CheckOutFinishPage{
  
    get labelHeader () {return $('//span[text()="Checkout: Complete!"]'); }
    get labelMessage1 () { return $('.complete-header');}
    get labelMessage2 () { return $('.complete-text');} 
}

module.exports = new CheckOutFinishPage();
