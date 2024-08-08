calcularPromedioNotas = function(){
    nota1= converfloat("txtnota1")
    nota2= converfloat("txtnota2")
    nota3= converfloat("txtnota3")
    promedio = calcularPromedio(nota1,nota2,nota3)
    mostrartxt("lblprom", promedio)
    console.log(promedio)
    if (promedio>8&&promedio<=10){
        mostrarimg("idimg","./img/exito.gif")
    }
    else if(promedio<=8&&promedio>=5){
        mostrarimg("idimg","./img/casiexito.gif")
    }
    else if(promedio<5&&promedio>0){
        mostrarimg("idimg","./img/fracaso.gif")
    }
    else{
        mostrarimg("idimg","./img/casifracaso.gif")
    }
}