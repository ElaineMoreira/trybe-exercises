let nota = 54

console.log(notaConceito(nota));
function notaConceito(nota) {
    if (nota <=100 && nota >=90){
        return "conceito A";
    }else if ( nota <90 && nota >=80){
        return "conceito B";
    }else if (nota <80 && nota >=70){
        return "conceito C";
    }else if (nota <70 && nota >=60){
        return "conceito D";
    }else if (nota <60 && nota >=50){
        return "conceito E";
    }else if  (nota < 50){
        return "conceito F"
    
    }else{
        return "erro! tente novamente.";    
    }
};
