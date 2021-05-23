let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let index = 0;
let menorNum = numbers[index];

for (let index of numbers) {
    if(index < menorNum){
        menorNum = index
    }
};
console.log(menorNum);

//para ver o maior

let index = 0
let maiorNum = numbers[index];

for (let index of numbers) {
    if(index > maiorNum){
        maiorNum = index
    }
    
};
console.log(maiorNum);