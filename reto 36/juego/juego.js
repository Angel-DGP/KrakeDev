let puntosUsuario = 0
let puntosComputador = 0


jugar = function(seleccionado){
    if(puntosUsuario<5 && puntosComputador<5){
        rpC = generarElemento()
        cambiarTexto("lblpc","ELECCION  DE COMPUTADORA:\n" + rpC)
        rutarpC = generarRuta(rpC)
        cambiarImagen("imgPC",rutarpC)
        resultado = determinarGanador(seleccionado,rpC)
        
        if(resultado==0){
            cambiarTexto("lblGanador","EMPATE")
        }
        if(resultado==1){
            cambiarTexto("lblGanador","GANASTE LA PARTIDA!!")
            puntosUsuario = puntosUsuario + 1
            cambiarTexto("lblpuntosU","PUNTOS DE USUARIO: " + puntosUsuario )
        }
        if(resultado==2){
            cambiarTexto("lblGanador","PERDISTE LA PARTIDA!!")
            puntosComputador = puntosComputador + 1
            cambiarTexto("lblpuntosC", "PUNTOS DE COMPUTADOR: " + puntosComputador)
        }
    }
    if(puntosUsuario==5){
        cambiarTexto("lblResumen","HAS GANADO EL JUEGO")
    
    }
        
    if(puntosComputador==5){
        cambiarTexto("lblResumen","EL COMPUTADOR TE HA VENCIDO")
    
    }
}

limpiar = function(){
    puntosUsuario = 0
    puntosComputador = 0
    
    cambiarTexto("lblpuntosU","PUNTOS DE USUARIO: ")
    cambiarTexto("lblpuntosC", "PUNTOS DE COMPUTADOR: ")

    cambiarTexto("lblpc","")
    cambiarTexto("lblGanador","")
    cambiarTexto("lblResumen","")

    cambiarImagen("imgPC", "")
}