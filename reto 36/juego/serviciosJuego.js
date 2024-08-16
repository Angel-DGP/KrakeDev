obtenerAleatorio = function(){
    return aleatorio = parseInt((Math.random()) * 3) + 1
}

generarElemento = function(){
    aleatorioPC = obtenerAleatorio()
    if (aleatorio>=1 && aleatorio<=1){
        return "PIEDRA"
    }
    if (aleatorio>=2 && aleatorio<=2){
        return "PAPEL"
    }
    if (aleatorio>=3 && aleatorio<=3){
        return "TIJERAS"
    }
}
determinarGanador = function(eleccionJugador1,eleccionJugador2){
    if(eleccionJugador1==eleccionJugador2){
        return 0}
    if (eleccionJugador1=="PIEDRA" && eleccionJugador2=="TIJERAS"){
        return 1}
    if (eleccionJugador1=="PAPEL" && eleccionJugador2=="PIEDRA"){
        return 1}
    if (eleccionJugador1=="TIJERAS" && eleccionJugador2=="PAPEL"){
        return 1}
    else{
        return 2}
}
generarRuta = function(nombre){
    if(nombre=="TIJERAS"){
        return "img/TIJERAS.png"
        
    }
    if(nombre=="PAPEL"){
        return "img/PAPEL.png"
    }
    if(nombre=="PIEDRA"){
        return "img/PIEDRA.png"
    }
}