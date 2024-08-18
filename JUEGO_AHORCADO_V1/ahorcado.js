//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
//La paciencia no es mi virtud, pero la logica si psdt: i guess
let palabraSecreta
let letrasEncontradas
let intentos = 0
let coincidencias = 0
let errores = 0

esMayuscula = function(caracter){
    codigo = caracter.charCodeAt(0)
    if (codigo>=65&&codigo<=90){return true}
    else{return false}
}

guardarPalabra = function(){
    let errorP1 = false
    palabraSecreta = recuperarTexto("txtSecreta")
    if(palabraSecreta.length==5){
        for(let i = 0; i<=4;i++){
            letraIterada = palabraSecreta.charAt(i)
            if(esMayuscula(letraIterada)==false){errorP1 = true}
        }
        if(errorP1==false){console.log(palabraSecreta)}
    }
    if(errorP1==true || palabraSecreta.length!=5){alert("DEBE INGRESAR UNA PALABRA CON 5 PALABRAS EN MAYUSCULAS")}
}

mostrarLetra = function(letra,posicion){
    if(posicion==0){mostrarTexto("div0",letra)}
    if(posicion==1){mostrarTexto("div1",letra)}
    if(posicion==2){mostrarTexto("div2",letra)}
    if(posicion==3){mostrarTexto("div3",letra)}
    if(posicion==4){mostrarTexto("div4",letra)}
}

validar = function(letra){
    let atino = false
    for(let i = 0; i<=palabraSecreta.length-1;i++){
        letraIterada = palabraSecreta.charAt(i)
        if(letraIterada==letra){
            letrasEncontradas+=1
            mostrarLetra(letra,i)
            coincidencias+=1
            atino=true
        }
    }
    if(atino==false){
        alert("LA LETRA NO ES PARTE DE LA PALABRA")
        errores+=1
        mostrarAhorcado()
    }
}

ingresarLetra = function(){
    intentos+=1
    letraU = recuperarTexto("txtLetra")
    if(esMayuscula(letraU)==true){
        validar(letraU)
        if(coincidencias==5){alert("HAS GANADO")}
        if(intentos==10){alert("HA PERDIDO")}
    }
    else{alert("SOLO SE ACEPTAN MAYUSCULAS")}
}

mostrarAhorcado = function(){
    if(errores==1){mostrarImagen("ahorcadoImagen","Ahorcado_01.png")}
    if(errores==2){mostrarImagen("ahorcadoImagen","Ahorcado_02.png")}
    if(errores==3){mostrarImagen("ahorcadoImagen","Ahorcado_03.png")}
    if(errores==4){mostrarImagen("ahorcadoImagen","Ahorcado_04.png")}
    if(errores==5){mostrarImagen("ahorcadoImagen","Ahorcado_05.png")}
    if(errores==6){mostrarImagen("ahorcadoImagen","Ahorcado_06.png")}
    if(errores==7){mostrarImagen("ahorcadoImagen","Ahorcado_07.png")}
    if(errores==8){mostrarImagen("ahorcadoImagen","Ahorcado_08.png")}
    if(errores==9){mostrarImagen("ahorcadoImagen","Ahorcado_09.png")}
}