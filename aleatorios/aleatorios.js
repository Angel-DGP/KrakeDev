numeroAleatorio = function () {
  return (aleatorio = parseInt(Math.random() * 100) + 1)
}

generarAleatorios = function () {
  let aleatorios = []
  let numeroU = recuperarTexto("txtNumero")
  let NumeroA
  if (numeroU <= 20 && numeroU >= 5) {
    for (let i = 0; i < numeroU; i++) {
      NumeroA = numeroAleatorio()
      aleatorios.push(NumeroA)
    }
  }
}

mostrarResultados = function(arregloNumeros){
    let cmp = document.getElementById("divTabla")
    let contenidoTabla="<table><tr><th>TABLA</th></tr>"
    for(let i=0;i<arregloNumeros.length;i++){
        console.log(arregloNumeros[i])
        contenidoTabla+="<tr><td>"
        contenidoTabla+=arregloNumeros[i]
        contenidoTabla+="</td></tr>"
    }
    contenidoTabla+="</table>"
    cmp.innerHTML=contenidoTabla
}
