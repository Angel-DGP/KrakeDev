//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
//La paciencia no es mi virtud, pero la logica si
let palabraSecreta

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
            letra = palabraSecreta.charAt(i)
            if(esMayuscula(letra)==false){errorP1 = true}
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