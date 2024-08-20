let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"3854385349",nombre:"Angie",apellido:"Quiñonez",sueldo:300.0}
]

let esNuevo = false



mostrarOpcionEmpleado = function(){
    deshabilitarCajas()
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

buscarEmpleado = function(cedula){
    let elemento
    let empleadoEncontrado = null
    for(let i=0; i<empleados.length;i++){
        elemento =empleados[i]
        if(cedula==elemento.cedula){
            empleadoEncontrado= elemento
            break
        }
    }
    return empleadoEncontrado
}

agregarEmpleado = function(empleado){
    let encontro = buscarEmpleado(empleado.cedula)
    if(encontro==null){
        empleados.push(empleado)
        return true
    }else{
        return false
    }

}

guardar = function(){
    let errorFGuardar = false
    let cedula = recuperarTexto("txtCedula")
    let nombre = recuperarTexto("txtNombre")
    let apellido = recuperarTexto("txtApellido")
    let sueldo = recuperarFloat("txtSueldo")
    let nullC = false
    let nullN = false
    let nullA = false
    let nullS = false

    //VERIFICACION CAMPOS VACIOS
    if(cedula==""){
        mostrarTexto("lblErrorCedula","*CAMPO OBLIGATORIO")
        errorFGuardar=true
        nullC=true}else{
        mostrarTexto("lblErrorCedula","")}

    if(nombre==""){
        mostrarTexto("lblErrorNombre","*CAMPO OBLIGATORIO")
        errorFGuardar=true
        nullN=true}else{
        mostrarTexto("lblErrorNombre","")}

    if(apellido==""){
        mostrarTexto("lblErrorApellido","*CAMPO OBLIGATORIO")
        errorFGuardar=true
        nullA=true}else{
        mostrarTexto("lblErrorApellido","")}

    if(isNaN(sueldo)||sueldo==""){
        mostrarTexto("lblErrorSueldo","*CAMPO OBLIGATORIO")
        errorFGuardar=true
        nullS=true}else{
        mostrarTexto("lblErrorSueldo","")}

    //VERIFICACION CEDULA
    if(nullC==false){
        let digitoIterado
        if(cedula.length !=10){
            errorFGuardar = true
            mostrarTexto("lblErrorCedula","EL VALOR INGRESADO NO ES VALIDO, \nVERIFIQUE QUE SEAN DIGITOS Y SEAN 10 DIGITOS")
        }
        else{
            mostrarTexto("lblErrorCedula","")
            for(let i=0;i<cedula.length;i++){
                digitoIterado = cedula.charAt(i)
                if(esDigito(digitoIterado)==false){
                    errorFGuardar = true
                    mostrarTexto("lblErrorCedula","EL VALOR NO ES COMPLETAMENTE DE DIGITOS")
                }
            }
        }
    }
    //VERIFICACION NOMBRE
    if(nullN==false){
        let letraIterada
        if(nombre.length>=3){
            mostrarTexto("lblErrorNombre","")
            for(let i=0; i<nombre.length;i++){
                letraIterada = nombre.charAt(i)
                if(esMayuscula(letraIterada)==false){
                    errorFGuardar = true
                    mostrarTexto("lblErrorNombre","EL VALOR INGRESADO NO ESTA EN MAYUSCULAS")
                }
            }
        }else{
            mostrarTexto("lblErrorNombre","EL VALOR ''NOMBRE'' DEBE TENER MAS DE 3 LETRAS")
            errorFGuardar = true
        }
    }
    //VERIFICACION APELLIDO
    if(nullA==false){
        let letraIterada
        if(apellido.length>=3){
            mostrarTexto("lblErrorApellido","")
            for(let i=0; i<apellido.length;i++){
                letraIterada = apellido.charAt(i)
                if(esMayuscula(letraIterada)==false){
                    errorFGuardar = true
                    mostrarTexto("lblErrorApellido","EL VALOR INGRESADO NO ESTA EN MAYUSCULAS")
                }
            }
        }else{
            mostrarTexto("lblErrorApellido","EL VALOR ''APELLIDO'' DEBE TENER MAS DE 3 LETRAS")
            errorFGuardar = true
        }
    }
    //VERIFICACION SUELDO
    if(nullS==false){
        if(sueldo>=400&&sueldo<=5000){
            mostrarTexto("lblErrorSueldo","")
        }else{
            mostrarTexto("lblErrorSueldo","EL VALOR DEBE ESTAR EN UN RANGO DE 400 Y 5000")
            errorFGuardar = true
        }
    }

    //PROCEDIMIENTO GUARDAR AHORASI
if(esNuevo==true& errorFGuardar==false){
    let conclusion
    empleadoNuevo = {

    }
    empleadoNuevo.cedula = cedula
    empleadoNuevo.nombre = nombre
    empleadoNuevo.apellido = apellido
    empleadoNuevo.sueldo = sueldo
    conclusion = agregarEmpleado(empleadoNuevo)
    if(conclusion==true){
        alert("EMPLEADO GUARDADO CORRECTAMENTE")
        mostrarEmpleados()
        deshabilitarCajas()
    }
    else{
        alert("YA EXISTE UN EMPLEADO CON LA CEDULA: " + empleadoNuevo.cedula)
    }
}

}

deshabilitarCajas = function(){
    deshabilitarComponente("txtCedula")
    deshabilitarComponente("txtNombre")
    deshabilitarComponente("txtApellido")
    deshabilitarComponente("txtSueldo")
    deshabilitarComponente("btnGuardar")
}