function paraDecimal(oct, res){
    let octal = Number(oct.value)
    let lista = octal.toString().split('')
    let tamanho = lista.length - 1
    let total = 0
    let pos = 0
    let info = ''
    
    /* Laço para verificar se algum valor é maior que 7 */
    for (i = 0; i < tamanho + 1; i++){
        if(lista[i] > 7){
            info = true
            break
        }else{
            info = false}
        }

    if (info == true){
         res.innerHTML = `<h1>Valor digitado não é Octal</h1>`
    }else{
        for (tamanho; tamanho >= 0; tamanho --){
            total += Number(lista[pos]) * (8**tamanho)
            pos ++ 
        }
        res.innerHTML = `<h1>Decimal = ${total}</h1>`
    }

}    



function paraOctal(dec, res){
    let decimal = Number(dec.value)
    let quoc = decimal
    let resto = ''


    while (quoc > 0){
        resto = `${quoc % 8}` + resto
        quoc = Math.floor(quoc/8)
    }

    res.innerHTML = `<h1>Octal = ${resto}</h1>`
}
   
