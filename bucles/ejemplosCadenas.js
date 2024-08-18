ejecutarPrueba1 = function(){
    let mensaje
    mensaje = recuperartxt("txtCadena")
    recorrerCadena(mensaje)
}

ejecutarPrueba2 = function(){
    let mensaje
    mensaje = recuperartxt("txtCadena")
    recorrerCadenaInvertida(mensaje)
}
recorrerCadena= function(cadena){
    let caracter
    
    for(let posicion = 0; posicion<cadena.length;posicion++){
        caracter = cadena.charAt(posicion)
        console.log("ITERANDO EN PRIMER FOR")
        console.log("CARACTER: " + caracter + "\nPOSICION: " + posicion)
    }

    for(let posicion = 0; posicion<=cadena.length-1;posicion++){
        console.log("\nITERANDO EN SEGUNDO FOR")
        caracter = cadena.charAt(posicion)
        console.log("CARACTER: " + caracter + "\nPOSICION: " + posicion)
    }
    
}
recorrerCadenaInvertida = function(cadena){
    let caracter
    let cInvertida = ""
    for(let posicion = cadena.length-1; posicion>=0;posicion--){
        console.log("\nITERANDO EN TERCER FOR")
        caracter = cadena.charAt(posicion)
        cInvertida = cInvertida + caracter
        console.log("CARACTER: " + caracter + "\nPOSICION: " + posicion)
        console.log(cInvertida)
    }
    mostrartxt("lblCInvertida",cInvertida)
}

buscarLetra = function(cadena,letra){
    let letraIterada
    let existeLetra = false
    for (let i=0; i<=cadena.length-1;i++){
        letraIterada = cadena.charAt(i)
        if (letraIterada==letra){
            existeLetra = true
        }
    }
    if(existeLetra==true){
        return true
    }
    else{
        return false
    }
}

contarMayusculas = function(cadena){
    let letra
    let contadorMayusculas
    for(let i=0; i<=cadena.length; i++){
        letra = cadena.charAt(i)
        if(esMayuscula(letra)==true){
            contadorMayusculas = contadorMayusculas + 1
        }
    }
}