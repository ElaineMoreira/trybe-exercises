let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let indexPar = 0;
let indexImpar = 0;

for (let index of numbers) {
    if(index % 2){
        console.log(`o número ${index} é impar`);
    }else{
        console.log(`o numero ${index} é par`); 
    }
};
console.log(`numero impar ${indexImpar}`);
console.log(`numero par ${indexPar}`);
