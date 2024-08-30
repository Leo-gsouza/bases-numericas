function paraBinario(dec, res){
    let decimal = Number(dec.value)
    let convertido = `<h1>${decimal.toString(2)}</h1>`
    let binario = ''
    let cont = 0
         
    while (decimal > 1){
        if (decimal % 2 == 0){
            binario = `<p>${cont}ª Casa = 0</p>` + binario
            decimal = Math.floor(decimal/2)
            cont ++
        }else{
            binario = `<p>${cont}ª Casa = 1</p>` + binario
            decimal = Math.floor(decimal/2)
            cont ++
        }
    }


        if (decimal == 1){
            binario = `<p>${cont}ª Casa = 1</p>` + binario
        }else if(decimal == 0){
            binario = `<p>${cont}ª Casa = 0</p>` + binario
        }
    

    res.innerHTML = `${convertido} ${binario}`

}

function paraDecimal(bin, res){
    let binario = Number(bin.value)
    let lista = binario.toString().split('')
    let item = 0
    let total = 0
    let casas = lista.length - 1

    for (casas; casas >= 0; casas --){
        total += lista[item] * (2**casas)
        item ++
    }

    res.innerHTML = `<h1>${total}</h1>`

}