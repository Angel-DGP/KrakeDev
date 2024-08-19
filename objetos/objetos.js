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

modificarAtributos = function(){
    let cuenta = {
        numero:"50505050",
        saldo : 0.0
    }
    cuenta.saldo=100
    cuenta.saldo+=10
    console.log(cuenta.saldo)
}
crearCliente = function(){
    let cliente = {
        cedula : "0000001",
        nombre : "Juan"
    }
    cliente.nombre="Juanito"
}
probarIncrementarSaldo = function(){
    let cuenta={
        numero: "099999999",
        saldo: 34.0
    }
    incrementarSaldo(cuenta,100)
    console.log(cuenta.saldo)
}
incrementarSaldo = function(cuenta,monto){
    cuenta.saldo+=monto

}
probarDeterminarMayor = function(){
    let p1={
        nombre:"Daniel"
        ,edad:45
    }
    let p2={
        nombre:"Luisa"
        ,edad:48
    }
    
    let pMayor = determinarMayor(p1,p2)
    if(pMayor!=null){
        console.log("El mayor es: " +pMayor.nombre)
    }
    else{}
}


determinarMayor = function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1
    }else if(persona2.edad>persona1.edad){
        return persona2
    }else{
        return null
    }
}