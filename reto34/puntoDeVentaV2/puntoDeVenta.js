calcularValorTotal = function () {
    let nombreProducto;
    let precioProducto; 
    let cantidad; 

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    nombreProducto =recuperarTexto("txtProducto")

    precioProducto =recuperarFloat("txtPrecio")
    
    cantidad=recuperarInt("txtCantidad")

    if (esProductoValido(nombreProducto, "lblError1") & esCantidadValida(cantidad, "lblError2")  & esPrecioValida(precioProducto, "lblError3")){
        console.log("entro al ig de que son validos")
        valorSubtotal = calcularSubtotal(precioProducto,cantidad)
        mostrarTexto("lblSubtotal",valorSubtotal)

        valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad)
        mostrarTexto("lblDescuento",valorDescuento)

        valorIVA=calcularIva(valorSubtotal-valorDescuento)
        mostrarTexto("lblValorIVA",valorIVA)

        valorTotal= calcularTotal(valorSubtotal, valorDescuento,valorIVA)
        mostrarTexto("lblTotal", valorTotal)
        mostrarTexto("lblResumen", msg ="Valor a pagar por " + cantidad + " " + nombreProducto + " con " + valorDescuento + "% de descuento: USD " + valorTotal)
    }
    else{
        mostrarTexto("lblTotal", "0.0")
        mostrarTexto("lblResumen","")
    }

}
limpiar = function(){
    mostrarTexto("lblSubtotal", "0.0")
    mostrarTexto("lblDescuento","0.0")
    mostrarTexto("lblValorIVA","0.0")
    mostrarTexto("lblTotal","0.0")
    mostrarTexto("lblResumen"," ")
    mostrarTexto("lblError1"," ")
    mostrarTexto("lblError2"," ")
    mostrarTexto("lblError3"," ")
    mostrarTextoEnCaja("txtProducto", "")
    mostrarTextoEnCaja("txtCantidad", "")
    mostrarTextoEnCaja("txtPrecio", "")
    mostrarTextoEnCaja("txtPorcentajeDescuento", "")
   
}

calcularDescuentoPorVolumen = function(subtotal,cantidad){
    subtotal = parseFloat(subtotal)
    cantidad = parseInt(cantidad)
    if (cantidad>=3 && cantidad <= 5){
        descuento = (3/100) * subtotal
    }
    else if (cantidad>=6 && cantidad <= 11){
        descuento = (4/100) * subtotal
    }
    else if (cantidad>=12){
        descuento = (5/100) * subtotal 
    }
    else if (cantidad<3){
        descuento = (0/100) * subtotal
    }
    return descuento.toFixed(2)

}

esProductoValido = function(producto, idComponenteError){
    let hayerror = false
    let lengthP = producto.length
    if (producto == "" || producto == undefined){
        mostrarTexto(idComponenteError,"*CAMPO OBLIGATORIO")
        hayerror = true
    }
    if (recuperarFloat("txtProducto")>0 ||recuperarFloat("txtProducto")<0 ){
        mostrarTexto(idComponenteError,"INGRESE UN VALOR VALIDO")
        hayerror = true
    }
    if(lengthP>10){
        mostrarTexto(idComponenteError,"¡El valor es mayor a 10 digitos!")
        hayerror = true
    }
    if (hayerror == false){
        mostrarTexto(idComponenteError,"")
    }
    return !hayerror
}

esCantidadValida = function(cantidad , idComponenteError){
    let hayerror = false
    if (recuperarTexto("txtCantidad")=="" || recuperarTexto("txtCantidad")==undefined){
        mostrarTexto(idComponenteError,"*CAMPO OBLIGATORIO")
        hayerror = true
    }
    if (isNaN(cantidad) & hayerror== false){
        mostrarTexto(idComponenteError,"INGRESE UN VALOR VALIDO")
        hayerror = true
    }
    if (cantidad<=0 || cantidad>=100){
        mostrarTexto(idComponenteError,"¡NO ESTA EN EL RANGO 0 A 100!")
        hayerror = true
    }
    if (hayerror == false){
        mostrarTexto(idComponenteError,"")
    }
    return !hayerror
}

esPrecioValida = function(precio , idComponenteError){
    let hayerror = false
    if (recuperarTexto("txtPrecio")=="" || recuperarTexto("txtPrecio")==undefined){
        mostrarTexto(idComponenteError,"*CAMPO OBLIGATORIO")
        hayerror = true
    }
    if (isNaN(precio) & hayerror== false){
        mostrarTexto(idComponenteError,"INGRESE UN VALOR VALIDO")
        hayerror = true
    }
    if (precio<0 || precio>50 ){
        mostrarTexto(idComponenteError,"¡NO ESTA EN EL RANGO 0 A 50!")
        hayerror = true
    }
    if (hayerror == false){
        mostrarTexto(idComponenteError,"")
    }
    return !hayerror
}

