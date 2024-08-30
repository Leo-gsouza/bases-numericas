function decimal(num, res ){
    let numero = Number(num.value)
    let unidade = Math.floor(numero/1)%10
    let dezena = Math.floor(numero/10)%10
    let centena = Math.floor(numero/100)%10
    let milhar = Math.floor(numero/1000)%10
    let dezMilhar = Math.floor(numero/10000)%10
    let cenMilhar = Math.floor(numero/100000)%10
    let milhao = Math.floor(numero/1000000)%10
    let dezMilhao = Math.floor(numero/10000000)%10
    let cenMilhao = Math.floor(numero/100000000)%10
    let bilhao = Math.floor(numero/1000000000)%10
    let dezBilhao= Math.floor(numero/10000000000)%10
    let cenBilhao = Math.floor(numero/100000000000)%10
    let trilhao = Math.floor(numero/1000000000000)%10
    
    
    res.innerHTML = `<p>Unidade = ${unidade} <strong>10<sup>0</sup></strong></p>\
    <p>Dezena = ${dezena} <strong>10<sup>1</sup></strong></p>\
    <p>Centena = ${centena} <strong>10<sup>2</sup></strong></p>\
    <p>Milhar = ${milhar} <strong>10<sup>3</sup></strong></p>\
    <p>Dezena de Milhar = ${dezMilhar} <strong>10<sup>4</sup></strong></p>\
    <p>Centena de Milhar = ${cenMilhar} <strong>10<sup>5</sup></strong></p>\
    <p>Milhão = ${milhao} <strong>10<sup>6</sup></strong></p>\
    <p>Dezena de Milhão = ${dezMilhao} <strong>10<sup>7</sup></strong></p>\
    <p>Centena de Milhão = ${cenMilhao} <strong>10<sup>8</sup></strong></p>\
    <p>Bilhão = ${bilhao} <strong>10<sup>9</sup></strong></p>\
    <p>Dezena de Bilhão = ${dezBilhao} <strong>10<sup>10</sup></strong></p>\
    <p>Centena de Bilhão = ${cenBilhao} <strong>10<sup>11</sup></strong></p>\
    <p>Trilhão= ${trilhao} <strong>10<sup>12</sup></strong></p>`
}