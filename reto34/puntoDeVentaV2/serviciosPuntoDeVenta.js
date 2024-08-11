calcularValorDescuento = function(monto,porcentajeDescuento){
    let valorDescuento = (porcentajeDescuento * monto) / 100
    return valorDescuento
}

calcularIva= function(monto){
    let iva = (monto/100) * 12
    return iva
}

calcularSubtotal = function(precio, cantidad){
    let subtotal = precio * cantidad
    return subtotal
}

calcularTotal = function(subtotal,descuento,iva){
    let total = subtotal - descuento + iva
    return total.toFixed(2)
}