let numero = 59875642

let lista = numero.toString().split('')/* Necessario converter para String para converter em lista */
let tamanho = lista.length 
let total = 0

for (tamanho; tamanho > 0; tamanho --){
    total += tamanho
}

console.log(total)