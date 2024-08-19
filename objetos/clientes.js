clientes =[
    {
        cedula : "0802111111",
        nombre : "Juan",
        edad : 20
    },{
        cedula : "0802111112",
        nombre : "Mario",
        edad : 50
    },{
        cedula : "0802111113",
        nombre : "Pepe",
        edad : 22
    }
]

mostrarClientes = function(){
    let cmpTabla = document.getElementById("tablaClientes")
    let contenidoTabla = "<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>"
    let elementoCliente
    for (let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i]
        contenidoTabla+="<tr><td>"+elementoCliente.cedula+"</td>"+
        "<td>"+elementoCliente.nombre+"</td>"+
        "<td>"+elementoCliente.edad+"</td>"+
        "</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla
}

buscarCliente = function(cedula){
    let elementoCliente
    let clienteEncontrado = null
    for(let i=0;i<clientes.length;i++){
        elementoCliente = clientes[i]
        if(elementoCliente.cedula == cedula){
            clienteEncontrado = elementoCliente
            break
        }
    }
    return clienteEncontrado
}

agregarCliente = function(cliente){
    let resultado
    resultado = buscarCliente(cliente.cedula)
    if(resultado==null){
        clientes.push(cliente)
        alert("CLIENTE AGREGADO")
        mostrarClientes()
    }
    else{
        alert("YA EXISTE UN CLIENTE CON ESA CEDULA: "+cliente.cedula)
    }
    
}

crearCliente = function(){
    let vCedula = recuperarTexto("txtCedula")
    let vNombre = recuperarTexto("txtNombre")
    let vEdad = recuperarTexto("txtEdad")

    let nuevoCliente = {}        
    nuevoCliente.cedula = vCedula
    nuevoCliente.nombre = vNombre
    nuevoCliente.edad = vEdad

    agregarCliente(nuevoCliente)
}

ejecutarBusqueda = function(){
    let valorCedula = recuperarTexto("txtBusqueda")
    let respuesta = buscarCliente(valorCedula)
    if(respuesta==null){
        alert("CLIENTE NO ENCONTRADO")
    }else{
        alert("CLIENTE ENCONTRADO")
        mostrarTextoEnCaja("txtCedula",respuesta.cedula)
        mostrarTextoEnCaja("txtNombre",respuesta.nombre)
        mostrarTextoEnCaja("txtEdad",respuesta.edad)
    }
}

modificarCliente = function(cliente){
    let clienteEncontrado = buscarCliente(cliente.cedula)
    if (clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre
        clienteEncontrado.edad=cliente.edad
    }
}

guardarCambios = function(){
    let vCedula = recuperarTexto("txtCedula")
    let vNombre = recuperarTexto("txtNombre")
    let vEdad = recuperarTexto("txtEdad")

    let cambiosCliente = {}        
    cambiosCliente.cedula = vCedula
    cambiosCliente.nombre = vNombre
    cambiosCliente.edad = vEdad

    modificarCliente(cambiosCliente)

    mostrarClientes()
}

//estoy mamado de escuchar cliente :c psdt: voy a tener pesadillas con ese cliente