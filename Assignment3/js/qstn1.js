function validateCreditCard(creditCardNum){
    if(creditCardNum.length !== 16){
        return false;
    }
    for(var i = 0; i < creditCardNum.length; i++){
        var currentNumber = creditCardNum[i];
        currentNumber = Number.parseInt(currentNumber);
        if(!Number.isInteger(currentNumber)){
            return false;
        }
    }
    var obj = {};
    for(var i = 0; i < creditCardNum.length; i++){
        obj[creditCardNum[i]] = true;
    }
    if(Object.keys(obj).length < 2){
        return false;
    }
    if(creditCardNum[creditCardNum.length - 1] % 2 !== 0){
        return false;
        var sum = 0;
        for(var i = 0; i < creditCardNum.length; i++){
            sum += Number(creditCardNum[i]);
        }
        if(sum <= 16){
            return false;
        }
        return true;
    }
}
var input = document.getElementById("q1input1");
console.log(validateCreditCard(input.value));