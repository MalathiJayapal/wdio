
//Sample util libtary functions are created for few events

class elementUtil{
   
    doSetValue(element,value){
        element.waitForClickable();
        element.setValue(value);
    }
    doClick(element){    
        element.toBeExisting();
        element.click();
    }

}

module.exports = new elementUtil()