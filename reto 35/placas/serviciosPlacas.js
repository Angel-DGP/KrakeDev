validarEstructura = function(placa){
    let longitudPlaca = placa.length -1
    let unodig = placa.charAt(0)
    let dosdig = placa.charAt(1)
    let tresdig = placa.charAt(2)
    let cuadig = placa.charAt(3)
    let cinig = placa.charAt(4)
    let seisdig = placa.charAt(5)
    let sietedig = placa.charAt(6)
    let hayerrores = false
    let msgs = "\n"
    if (longitudPlaca>=6){
        if(esMayuscula(unodig)== false){
            msgs = msgs + "\nEl primer digito no es mayuscula\n"
            hayerrores = true
        }
        
       
        if(esMayuscula(dosdig)==false){
            msgs = msgs + " \nEl segundo digito no es mayuscula\n"
            hayerrores = true
        }
            

        if(esMayuscula(tresdig)==false){
            msgs = msgs + " \nEl tercer digito no es mayuscula\n"
            hayerrores = true
        }
            

        if(esGuion(cuadig)==false){
            msgs = msgs + " \nEl cuarto digito no es un guion\n"
            hayerrores = true
        }
            

        if(esDigito(cinig)==false){
            msgs = msgs + " \nEl quinto digito no es un digito\n"
            hayerrores = true
        }
            
        
        if(esDigito(seisdig)==false){
            msgs = msgs + " \nEl sexto digito no es un digito\n"
            hayerrores = true
        }
            
    
        if(esDigito(sietedig)==false){
            msgs = msgs + " \nEl septimo digito no es un digito\n"
            hayerrores = true
        }
            
    }
    if (longitudPlaca==7){
        let ochodig = placa.charAt(7)
        if(esDigito(ochodig)==false){
            msgs = msgs + " \nEl octavo digito no es un digito\n"
            hayerrores = true
        }
            
    }
    if (longitudPlaca>=8 || longitudPlaca==-1 || longitudPlaca<=5){
        msgs = "NO SE HA INGRESADO UNA PLACA VALIDA"
        hayerrores = true
    }
    if (hayerrores == false){
        msgs = null
    }
    return msgs
}

obtenerProvincia = function(placa){
    undig = placa.charAt(0)
    if (undig =="A"){
        return "AZUAY"
    }
    if (undig =="B"){
        return "BOLIVAR"
    }
    if (undig =="U"){
        return "CAÑAR"
    }
    if (undig =="C"){
        return "CARCHI"
    }
    if (undig =="X"){
        return "COTOPAXI"
    }
    if (undig =="H"){
        return "CHIMBORAZO"
    }
    if (undig =="O"){
        return "EL ORO"
    }
    if (undig =="E"){
        return "ESMERALDAS"
    }
    if (undig =="W"){
        return "GALAPAGOS"
    }
    if (undig =="G"){
        return "GUAYAS"
    }
    if (undig =="I"){
        return "IMBAMBURA"
    }
    if (undig =="L"){
        return "LOJA"
    }
    if (undig =="R"){
        return "LOS RIOS"
    }
    if (undig =="M"){
        return "MANABI"
    }
    if (undig =="V"){
        return "MORONA SANTIAGO"
    }
    if (undig =="N"){
        return "NAPO"
    }
    if (undig =="S"){
        return "PASTAZA"
    }
    if (undig =="P"){
        return "PICHINCHA"
    }
    if (undig =="K"){
        return "SUCUMBIOS"
    }
    if (undig =="Q"){
        return "ORELLANA"
    }
    if (undig =="T"){
        return "TUNGURAHUA"
    }
    if (undig =="Z"){
        return "ZAMORA CHINCHIPE"
    }
    if (undig =="Y"){
        return "SANTA ELENA"
    }
}

obtenerDiaPicoYPlaca = function(placa){
    let longitudPlaca = placa.length -1
    udig=placa.charAt(longitudPlaca)
    if(udig==1 || udig==2){
        return "LUNES"
    }
    if(udig==3 || udig==4){
        return "MARTES"
    }

    if(udig==5 || udig==6){
        return "MIERCOLES"
    }

    if(udig==7 || udig==8){
        return "JUEVES"
    }
    if(udig==9 || udig==0){
        return "VIERNES"
    }

}