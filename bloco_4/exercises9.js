let num1 = 3;
let num2 = 5;
let num3 = 7;

console.log(numeroImpar(num1, num2, num3));

function numeroImpar(num1, num2, num3){
    if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0){
        return true;
    }else{
        return false;
    }
};
