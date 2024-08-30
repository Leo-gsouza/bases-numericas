function paraDecimal(hex, res){
    let hexadecimal = String(hex.value).toUpperCase()
    let lista = hexadecimal.split('')
    let tamanho = lista.length - 1
    let pos = 0
    let total = 0



    for (i = tamanho; i >=0; i-- ){
        if (lista[i] == 'A'){
            lista[i] = 10
        }else if(lista[i] == 'B'){
            lista[i] = 11
        }else if (lista[i] == 'C'){
            lista[i] = 12
        }else if(lista[i] == 'D'){
            lista[i] = 13
        }else if (lista[i] == 'E'){
            lista[i] = 14
        }else if (lista[i] == 'F'){
            lista[i] = 15
        }
    }


    for (tamanho; tamanho >=0; tamanho--){
        total += lista[pos]*(16**tamanho)
        pos ++
    }
    res.innerHTML= `<h1>Decimal = ${total}</h1>`
}

function paraHexadecimal(dec, res){
    let decimal = Number(dec.value)
    let quoc = decimal
    let resto = ''
  

    while (quoc > 0){
        if(quoc % 16 == 10){
            resto = 'A' + resto
        }else if(quoc % 16 === 11){
            resto = 'B' + resto
        }else if(quoc % 16 === 12){
            resto = 'C' + resto
        }else if(quoc % 16 === 13){
            resto = 'D' + resto
        }else if(quoc % 16 === 14){
            resto = 'E' + resto
        }else if(quoc % 16 === 15){
            resto = 'F' + resto
        }else{
            resto = `${quoc % 16}` + resto
        }

        quoc = Math.floor(quoc/16)
        
    }

    res.innerHTML = `<h1>Hexadecimal = ${resto}</h1>`


    
}