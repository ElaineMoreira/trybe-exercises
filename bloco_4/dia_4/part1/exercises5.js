let objeto = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim'
}
let objeto2 = {
        personagem: 'Tio Patinhas',
        origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
        nota: 'O último MacPatinhas',
        recorrente: 'sim'
}
for (let key in objeto, objeto2) {
    console.log(objeto[key],'e', objeto2[key]);
}