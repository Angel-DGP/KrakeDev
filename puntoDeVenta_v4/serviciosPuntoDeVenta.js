calcularValorDescuento = function(monto,porcentajeDescuento){
    return valorDescuento = (100 / porcentajeDescuento) * monto
}

calcularIva= function(monto){
    return iva = (100/12) * monto
}

calcularSubtotal = function(precio, cantidad){
    return subtotal = precio * cantidad
}

calcularTotal = function(subtotal,descuento,iva){
    total = subtotal - descuento + iva

}