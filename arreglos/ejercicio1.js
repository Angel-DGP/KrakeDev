let notas = []
agregarElementos = function(){
    notas.push(5)
    notas.push(10)
    console.log(notas.length)
}

probarAgregar = function(){
    let notaRecuperada
    notaRecuperada=recuperarInt("txtNota")
    agregarNota(notaRecuperada)
}

recorrerArreglo = function(){
    let notaR
    for(let indice = 0;indice<notas.length;indice++){
        notaR = notas[indice]
        console.log(notaR)
    }
}

agregarNota = function(nota){
    notas.push(nota)
}

calcularPromedio = function(){
    let sumaNotas = 0
    let promedio
    for (let i=0;i<notas.length;i++){
        sumaNotas = sumaNotas + notas[i]
    }
    promedio = sumaNotas/notas.length
    return promedio.toFixed(2)
}
ejecutarPromedio = function(){
    promedio = calcularPromedio()
    mostrarTexto("lblPromedio",promedio)
}