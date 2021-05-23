let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let index = 0
let last = 0

for (let index of numbers) {
    if(index > last){
        last = index;
    }
}
console.log(last);