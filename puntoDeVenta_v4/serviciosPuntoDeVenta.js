calcularValorDescuento = function(monto,porcentajeDescuento){
    let valorDescuento = (porcentajeDescuento * monto) / 100
    return valorDescuento.toFixed(1)
}

calcularIva= function(monto){
    return iva = (monto/100) * 12
}

calcularSubtotal = function(precio, cantidad){
    return subtotal = precio * cantidad
}

calcularTotal = function(subtotal,descuento,iva){
    total = subtotal - descuento + iva

}