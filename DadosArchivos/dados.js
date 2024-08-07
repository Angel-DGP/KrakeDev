jugar = function(){
    let dado = lanzarDado()
    cambiarTexto("lblNumero", dado)
    if(dado>3){
        cambiarTexto("lblresumen","Ganaste")
        cambiarTexto("lblresumen2","Estas de suerte")
    }
    else{
        cambiarTexto("lblresumen","Perdiste")
        cambiarTexto("lblresumen2","Estas de malas")
    }
}
lanzarDado= function(){
    return aleatorio = parseInt((Math.random()) * 6) + 1
}