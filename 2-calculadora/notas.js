calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");

    nota2 = recuperarFloat("txtNota2");

    nota3 = recuperarFloat("txtNota3");

    if(esNotaValida(nota1,"lblError1")& esNotaValida(nota2,"lblError2")& esNotaValida(nota3,"lblError3")){
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }
    else{
        mostrarTexto("lblResultado", "0,0")
    }
}
esNotaValida = function(nota,idComponenteError){
    let errorHay = false
    if (isNaN(nota)){
        mostrarTexto(idComponenteError,"¡Debe ingresar un número!")
        errorHay = true
    }
    if(nota< 0 || nota >10){
        mostrarTexto(idComponenteError,"¡El numero debe estar entre 0 y 10!")
        errorHay = true
    }
    if (errorHay == false){
        mostrarTexto(idComponenteError,"")
    }
    return !errorHay
}
limpiar = function(){
    mostrarTexto("lblResultado", "0.0")
}