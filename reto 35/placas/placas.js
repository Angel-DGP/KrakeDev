validarPlaca=function(){
    placaU = recuperarTexto("txtPlaca")
    erroresEstructura = validarEstructura(placaU)
    if (erroresEstructura==null){
        mostrarTexto("lblPlaca?","VALIDA")
        mostrarTexto("lblErrores",erroresEstructura)
        provincia=obtenerProvincia(placaU)
        tVehiculo = obtenerTipoVehiculo(placaU)
        picoYPlaca = obtenerDiaPicoYPlaca(placaU)
        if(provincia!=null && tVehiculo!=null && picoYPlaca!=null){
            mostrarTexto("lblProvi","PROVINCIA: " + provincia)
            mostrarTexto("lblTV","TIPO DE VEHICULO: " + tVehiculo)
            mostrarTexto("lblPYP","PICO Y PLACA: " + picoYPlaca)
            
        }
        else if (provincia==null){
            mostrarTexto("lblProvi","PROVINCIA INCORRECTA")
        }
        else if (tVehiculo==null){
            mostrarTexto("lblTV","TIPO DE VEHICULO NO ENCONTRADO")
        }
        else if (picoYPlaca==null){
            mostrarTexto("lblPYP","PICO Y PLACA NO ENCONTRADO")
        }
    }
    else{
        mostrarTexto("lblPlaca?","INCORRECTA")
        mostrarTexto("lblErrores",erroresEstructura)
        mostrarTexto("lblProvi","")
        mostrarTexto("lblTV","")
        mostrarTexto("lblPYP","")
    }
}

obtenerTipoVehiculo = function(placa){
    dodig = placa.charAt(1)
    if (dodig == "A" || dodig == "Z"){
        return "VEHICULO COMERCIAL"
    }
    if (dodig == "E"){
        return "VEHICULO GUBERNAMENTAL"
    }
    if (dodig == "X"){
        return "VEHICULO DE USO OFICIAL"
    }
    if (dodig == "S"){
        return "VEHICULO DEL GOBIERNO PROVINCIAL"
    }
    if (dodig == "M"){
        return "VEHICULO MUNICIPAL"
    }
    if (dodig == "B" || dodig == "C" || dodig == "D" || dodig == "F" || dodig == "G"|| dodig == "H"
        || dodig == "I" || dodig == "J" || dodig == "K" || dodig == "L" || dodig == "N" || dodig == "O"
        || dodig == "P" || dodig == "Q" || dodig == "R" || dodig == "T" || dodig == "U" || dodig == "V"
        || dodig == "W" || dodig == "Y"
     ){
        return "VEHICULO PARTICULAR"
    }
}
