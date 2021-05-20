let a1 = 30;
let a2 = 60;
let a3 =90;

console.log(angtriangulo(a1, a2, a3));
function angtriangulo(a1, a2, a3){
    if(a1 + a2 +a3 == 180){
        return true;
    }else{
        return false;
    }
};
