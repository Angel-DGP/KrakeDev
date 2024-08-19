let frutas = ["PERA","MANZANA","BANANA"]
probarBusqueda= function(){
    encontrar = buscar(elementoABuscar = recuperarTexto("txtFruta"))
    if(encontrar==null){
        mostrarTexto("lblResultado","No se encontro la fruta")
    }
    else{
        mostrarTexto("lblResultado","SE ENCONTRO LA FRUTA:" + encontrar)
    }
}
buscar = function(eBuscar){
    let elemento
    let frutaEncontrada = null
    for(let i = 0; i<frutas.length;i++){
        elemento = frutas[i]
        if(elemento==eBuscar){
            frutaEncontrada = elemento
            break
        }
    }
    return frutaEncontrada
}