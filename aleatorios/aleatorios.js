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
