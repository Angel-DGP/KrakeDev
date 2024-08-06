recuperartxt= function(idCMP){
let cmp = document.getElementById(idCMP)
let ving = cmp.value
return ving
}
saludar = function(){
    let name = recuperartxt("txtname")
    let lname= recuperartxt("txtlname")
    let edad = converInt("txtdad")
    let estatura = converfloat("txtesta")
    console.log("Hola "+ name+" " + lname+ ", tu edad es: " + edad + " y estatura: " + estatura)
}

converInt = function(idcmp){
    let vSTR = recuperartxt(idcmp)
    let vINT = parseInt(vSTR)
    return vINT
}

converfloat = function(idcmp){
    let vSTR = recuperartxt(idcmp)
    let vFloat = parseFloat(vSTR)
    return vFloat
}