esMayuscula = function(caracter){
    ascii = caracter.charCodeAt(0)
    if (ascii>=65 && ascii<=90){
        return true
    }
    else{
        return false
    }

}
esDigito = function(caracter){
    ascii = caracter.charCodeAt(0)
    if (ascii>=48 && ascii<=57){
        return true
    }
    else{
        return false
    }
}
esGuion = function(caracter){
    ascii = caracter.charCodeAt(0)
    if (ascii==45){
        return true
    }
    else{
        return false
    }
}