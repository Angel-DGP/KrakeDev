let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"3854385349",nombre:"Angie",apellido:"Quiñonez",sueldo:300.0}
]

let esNuevo = false



mostrarOpcionEmpleado = function(){
    deshabilitarComponente("txtCedula")
    deshabilitarComponente("txtNombre")
    deshabilitarComponente("txtApellido")
    deshabilitarComponente("txtSueldo")

    deshabilitarComponente("btnGuardar")
    mostrarComponente("divEmpleado")
    ocultarComponente("divRol")
    ocultarComponente("divResumen")
    mostrarEmpleados()
}

mostrarOpcionRol = function(){
    ocultarComponente("divEmpleado")
    mostrarComponente("divRol")
    ocultarComponente("divResumen")
}

mostrarOpcionResumen = function(){
    ocultarComponente("divEmpleado")
    ocultarComponente("divRol")
    mostrarComponente("divResumen")
}

mostrarEmpleados = function(){
    let cmpTabla = document.getElementById("tablaEmpleados")
    let contenidoTabla = "<table><tr>"+"<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+"<th>EDAD</th>"+"</tr>"
    let elementoEmpleados
    for (let i=0; i<empleados.length;i++){
        elementoEmpleados = empleados[i]
        contenidoTabla+= 
        "<tr><td>"+elementoEmpleados.cedula+"</td>"+
        "<td>"+elementoEmpleados.nombre+"</td>"+
        "<td>"+elementoEmpleados.apellido+"</td>"
        "<td>"+elementoEmpleados.sueldo+"</td></tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla
}

ejecutarNuevo = function(){
    habilitarComponente("txtCedula")
    habilitarComponente("txtNombre")
    habilitarComponente("txtApellido")
    habilitarComponente("txtSueldo")

    habilitarComponente("btnGuardar")
    esNuevo = true
}