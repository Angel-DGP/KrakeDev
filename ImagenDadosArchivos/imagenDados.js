
let puntos= 0
let lanzamientos= 5


jugar=function(){
    let resultado=lanzarDado();
    mostrarCara(resultado)
    modificarPuntos(resultado)
    modificarLanzamientos()
}

modificarPuntos = function(numero){
    puntos = puntos + numero
    cambiarTexto("puntaje",puntos)
    if (puntos>=20){
        cambiarTexto("resumen","Ganaste!")
        limpiar()
        }
    
}

modificarLanzamientos = function(){
    lanzamientos = lanzamientos - 1
    cambiarTexto("lanza", lanzamientos)
    if (lanzamientos == 0){
        cambiarTexto("resumen","GAME OVER")
        limpiar()
    }
}
limpiar = function(){
    puntos= 0
    lanzamientos= 5
    cambiarImagen("idimgd","")
    cambiarTexto("lanza", lanzamientos)
    cambiarTexto("puntaje",puntos)
}
mostrarCara = function(numero){
    if(numero == 1){
        cambiarImagen("idimgd","./dados1.png")
    }
    else if(numero == 2){
        cambiarImagen("idimgd","./dados2.png")
    }
    else if(numero == 3){
        cambiarImagen("idimgd","./dados3.png")
    }
    else if(numero == 4){
        cambiarImagen("idimgd","./dados4.png")
    }
    else if(numero == 5){
        cambiarImagen("idimgd","./dados5.png")
    }
    else if(numero == 6){
        cambiarImagen("idimgd","./dados6.png")
    }

}


lanzarDado= function(){
    return aleatorio = parseInt((Math.random()) * 6) + 1
}