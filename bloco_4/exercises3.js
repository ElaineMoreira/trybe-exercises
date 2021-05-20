let num = 7;
let num1 = 27;
let num2 = 37;

console.log(maiorQue(num, num1, num2));
function maiorQue(num, num1, num2) {
    if(num>num1 && num>num2) {
        return num;
    }else if (num1>num2 && num1>num2){
        return num1
    }else{
        return num2;
    }
           
};