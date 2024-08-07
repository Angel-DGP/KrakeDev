calcularPromedioNotas = function(){
    nota1= converfloat("txtnota1")
    nota2= converfloat("txtnota2")
    nota3= converfloat("txtnota3")
    promedio = calcularPromedio(nota1,nota2,nota3)
    mostrartxt("lblprom", promedio)
    console.log(promedio)
}