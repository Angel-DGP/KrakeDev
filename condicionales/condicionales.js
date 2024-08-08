let ingresoAnual = 5000.34
let edad = 55
let ingresos = 400.23
let egresos = 120.54
let precio = 5.4
let cantidad = 20
let nivelColesterol = 134.3
let clave = "sdiiW32$23"
let caracter = "A"
let notaMatematica = 87.32
let notaFisica = 48.90
let notaGeometria = 99.02

calcularTasaInteres = function(ingresoAnual){
    let tasa = 0
    if(ingresoAnual<300000){
        tasa = ingresoAnual * (16/100)
    }
    else if(ingresoAnual >= 300000 && ingresoAnual < 500000){
        tasa= ingresoAnual * (15/100)
    }
    else if(ingresoAnual >= 500000 && ingresoAnual < 1000000){
        tasa= ingresoAnual * (14/100)
    }
    else if(ingresoAnual >= 1000000 && ingresoAnual < 2000000){
        tasa= ingresoAnual * (13/100)
    }
    else if(ingresoAnual >= 2000000){
        tasa= ingresoAnual * (12/100)
    }
    console.log(tasa)
    return tasa
    
}

calcularCapacidadPago = function(edad,ingresos,egresos){
    if (edad>50){
        cuota = (ingresos * 0.30) - egresos
    }
    else if (edad<=50){
        cuota = (ingresos * 0.40) - egresos
    }
    console.log(cuota)
    return cuota
}

calcularDescuento = function(precio, cantidad){
    if (cantidad>=3 && cantidad <= 5){
        descuento = (precio * cantidad) - ((2/100) * (precio * cantidad)) 
    }
    else if (cantidad>=6 && cantidad <= 11){
        descuento = (precio * cantidad) - ((3/100) * (precio * cantidad)) 
    }
    else if (cantidad>=12){
        descuento = (precio * cantidad) - ((4/100) * (precio * cantidad)) 
    }
    else if (cantidad<3){
        descuento = (precio * cantidad) - ((0/100) * (precio * cantidad))
    }
    console.log(descuento)
    return descuento
}

determinarColesterolLDL = function(nivelColesterol){
    if (nivelColesterol<100){
        ldlSTR = "Óptimo (lo mejor para su salud)"
    }
    else if (nivelColesterol>=100 && nivelColesterol<130){
        ldlSTR = "Casi óptimo"
    }
    else if (nivelColesterol>=130 && nivelColesterol<160){
        ldlSTR = "Límite superior del rango normal"
    }
    else if (nivelColesterol>=160 && nivelColesterol<190){
        ldlSTR = "Alto"
    }
    else if (nivelColesterol>=190){
        ldlSTR = "Muy alto"
    }
    return ldlSTR
}

validarClave = function(clave){
    let tam = clave.length
    if(tam>=8 && tam<=16){
        return true
    }
    else{
        return false
    }
}

esMayuscula = function(caracter){
    cascii = caracter.charCodeAt(0)
    if (cascii>=65 && cascii<= 90 ){
        return true
    }
    else {
        return false
    } 

}

esMinuscula = function(caracter){
    cascii = caracter.charCodeAt(0)
    if (cascii>=97 && cascii<= 122 ){
        return true
    }
    else {
        return false
    } 

}

esDigito = function(caracter){
    cascii = caracter.charCodeAt(0)
    if (cascii>=0 && cascii<= 255 ){
        return true
    }
    else {
        return false
    } 

}

darPermiso = function(notaMatematica,notaFisica,notaGeometria){
    if (notaMatematica>90 || notaFisica>90 || notaGeometria >90){
        return true
    }
    else{
        return false
    }

}

otorgarPermiso = function(notaMatematica,notaFisica,notaGeometria){
    if (notaMatematica>90 || notaFisica>90 && notaGeometria >80){
        return true
    }
    else{
        return false
    }
}

dejarSalir = function(notaMatematica,notaFisica,notaGeometria){
    if (notaMatematica>90 || notaFisica>90 || notaGeometria >90 && notaFisica>notaMatematica){
        return true
    }
    else{
        return false
    }
}