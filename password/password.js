ejecutarValidacion = function(){
    password = recuperarTexto("txtPassword")
    mensajesDeErrores=validarPassword(password)
    if(mensajesDeErrores==""){
        cambiarTexto("lblErrores",mensajesDeErrores)
        cambiarTexto("lblValidar","PASSWORD CORRECTO")
    }
    else{
        cambiarTexto("lblValidar","")
        cambiarTexto("lblErrores",mensajesDeErrores)
    }
}

validarPassword = function(passwordF){
    let errores = ""
    let letraIterada
    if(passwordF.length>=8 && passwordF.length<=16){ 
        let existeLetraM = false
        let existeDigito = false
        let existeCaracterEspecial = false  
        for (let i=0; i<=passwordF.length-1;i++){
            letraIterada = passwordF.charAt(i)
            if(esMayuscula(letraIterada)){existeLetraM = true}
            if(esDigito(letraIterada)){existeDigito = true}
            if(esCaracterEspecial(letraIterada)){existeCaracterEspecial = true}
        }
        if(existeLetraM==false){errores = errores + "\nNo posee una letra en mayusculas"}
        if(existeDigito==false){errores = errores + "\nNo posee un digito"}
        if(existeCaracterEspecial==false){errores = errores + "\nNo posee un caracter Especial"}
    }
    else{
        errores = errores + "\nNo cumple las condiciones de longitud"
        console.log(errores)
    
    }
    return errores
}

esMayuscula = function(caracter){
    cascii = caracter.charCodeAt(0)
    if (cascii>=65 && cascii<= 90 ){return true}
    else{return false} 
}

esDigito = function(caracter){
    cascii = caracter.charCodeAt(0)
    if(cascii>=48&&cascii<=57){return true}
    else{return false}
}
esCaracterEspecial = function(caracter){
    cascii = caracter.charCodeAt(0)
    if(cascii==42 || cascii==45 || cascii==95){return true}
    else{return false}
}