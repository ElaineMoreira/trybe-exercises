let v1 = 9;
let v2 = 3;
let v3 = 5;
console.log(parImpar(v1, v2, v3));
function parImpar(v1, v2, v3){
    if(v1 % 2 == 0 || v2 % 2 == 0 || v3 % 2 == 0) {
        return true;
    }else{
        return false;
    }
};

