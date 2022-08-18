let tabuada = Number(prompt("Digite o numero para criar a tabuada"))
while (isNaN(tabuada)) {
    tabuada = Number(prompt("Numero invalido tente novamente"))
}
let numeros = [1,2,3,4,5,6,7,8,9,10]
for(i in numeros){
    console.log(numeros[i]*tabuada)
}