probarAtributos = function(){
    let persona = {
        nombre : "PEDRO",
        apellido : "MORALES",
        edad : 24,
        estaVivo : true
    }
    console.log(persona.nombre)
    console.log(persona.edad)
    if(persona.estaVivo==false){
        console.log("NO ESTA VIVO")
    }
    else{
        console.log("SI ESTA VIVO")
    }
}

crearProducto = function(){
    producto1 = {
        nombre : "SANDIA",
        precio : 2.0,
        stock : 10
    }
    producto2 = {
        nombre : "ARROZ",
        precio : 1.0,
        stock : 56
    }
    console.log(producto1.nombre)
    console.log(producto2.nombre)
    if(producto1.stock>producto2.stock){
        console.log("PRODUCTO 1 TIENE MAS STOCK")
    }
    if(producto1.stock<producto2.stock){
        console.log("PRODUCTO 2 TIENE MAS STOCK")
    }
    if(producto1.stock==producto2.stock){
        console.log("AMBOS PRODUCTOS TIENEN EL MISMO STOCK")
    }
}