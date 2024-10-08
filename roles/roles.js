let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"3854385349",nombre:"Angie",apellido:"Quiñonez",sueldo:300.0}
]

let esNuevo = false

let roles = []

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
    mostrarRoles()
    deshabilitarComponente("btnGuardarRol")
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
        esNuevo = false
    }
    else{
        alert("YA EXISTE UN EMPLEADO CON LA CEDULA: " + empleadoNuevo.cedula)
        empleado_buscado =buscarEmpleado(empleadoNuevo.cedula)
        empleado_buscado.nombre = empleadoNuevo.nombre
        empleado_buscado.apellido = empleadoNuevo.apellido
        empleado_buscado.sueldo = empleadoNuevo.sueldo
        alert("EMPLEADO MODIFICADO EXISTOSAMENTE")
        mostrarEmpleados()
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

ejecutarBusqueda = function(){
    cedula_empleado = recuperarTexto("txtBusquedaCedula")
    se_encontro = buscarEmpleado(cedula_empleado)
    if(se_encontro!=null & cedula_empleado!=""){
        habilitarComponente("txtCedula")
        mostrarTextoEnCaja("txtCedula",se_encontro.cedula)
        habilitarComponente("txtNombre")
        mostrarTextoEnCaja("txtNombre",se_encontro.nombre)
        habilitarComponente("txtApellido")
        mostrarTextoEnCaja("txtApellido",se_encontro.apellido)
        habilitarComponente("txtSueldo")
        mostrarTextoEnCaja("txtSueldo",se_encontro.sueldo)
        
        deshabilitarComponente("txtBusquedaCedula")
    }
    else{
        alert("EMPLEADO NO EXISTE")
    }
}

limpiar = function(){
    mostrarTextoEnCaja("txtCedula","")
    mostrarTextoEnCaja("txtNombre","")
    mostrarTextoEnCaja("txtApellido","")
    mostrarTextoEnCaja("txtSueldo","")
    esNuevo = false
    deshabilitarCajas()
    mostrarTexto("lblErrorCedula","")
    mostrarTexto("lblErrorNombre","")
    mostrarTexto("lblErrorApellido","")
    mostrarTexto("lblErrorSueldo","")
}

buscarPorRol = function(){
    cedula_empleado = recuperarTexto("txtBusquedaCedulaRol")
    empleado_buscado = buscarEmpleado(cedula_empleado)
    if(empleado_buscado!=null & cedula_empleado!=""){
        mostrarTexto("infoCedula",empleado_buscado.cedula)
        mostrarTexto("infoNombre",empleado_buscado.nombre + " " + empleado_buscado.apellido)
        mostrarTexto("infoSueldo",empleado_buscado.sueldo)
    }
    else{
        alert("NO EXISTE EMPLEADO")
    }
    
}

calcularAporteEmpleado = function(sueldo_empleado){
    return valorAporte = (9.45 * sueldo_empleado)/100
}

calcularValorAPagar = function(sueldo_empleado,aporte_iess,descuento_empleado){
    descuento_a_pagar = (descuento_empleado*sueldo_empleado)/100
    return valorAPagar = (sueldo_empleado - (aporte_iess + descuento_a_pagar))
}

calcularRol = function(){
    let sueldo = recuperarFloatDiv("infoSueldo")
    let descuento = recuperarTexto("txtDescuentos")
    let aporte_Empleado_Iess = calcularAporteEmpleado(sueldo)
    mostrarTexto("infoIESS",aporte_Empleado_Iess)
    let total_a_pagar = calcularValorAPagar(sueldo,aporte_Empleado_Iess,descuento)
    mostrarTexto("infoPago",total_a_pagar)
    habilitarComponente("btnGuardarRol")
}

buscarRol = function(cedula){
    let elemento
    let rolEncontrado = null
    for(let i=0;i<roles.length;i++){
        elemento = roles[i]
        if(cedula==elemento.cedula){
            return rolEncontrado = elemento
        }
    }
    return rolEncontrado
}

agregarRol = function(rol){
    let rol_encontrado = buscarRol(rol.cedula)
    if(rol_encontrado==null){
        roles.push(rol)
        alert("ROL AGREGADO")
    }
    else{
        alert("YA EXISTE UN ROL CON ESA CEDULA: "+ rol.cedula)
    }
}

calcularAporteEmpleador = function(sueldo){
    return aporteAPagar = (sueldo * 11.15) / 100
}

guardarRol = function(){
    let rol = {

    }
    aporte_Iess = recuperarFloatDiv("infoIESS")
    total_a_pagar_rol = recuperarFloatDiv("infoPago")
    cedula_rol = recuperarTextoDiv("infoCedula")
    nombre_rol = recuperarTextoDiv("infoNombre")
    sueldo_rol = recuperarFloatDiv("infoSueldo")

    aporte_empleador = calcularAporteEmpleador(sueldo_rol)
    rol.cedula = cedula_rol
    rol.nombre = nombre_rol
    rol.sueldo = sueldo_rol
    rol.valorAPagar = total_a_pagar_rol
    rol.aporteEmpleado = aporte_Iess
    rol.aporteEmpleador = aporte_empleador
    agregarRol(rol)
    deshabilitarComponente("btnGuardarRol")
    mostrarRoles()
    mostrarTotales()
}

mostrarRoles = function(){
    let cmpTabla = document.getElementById("tablaResumen")
    let contenidoTabla = "<table><tr>"+"<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+"<th>VALOR A PAGAR</th>"+
    "<th>APORTE EMPLEADO</th>"+"<th>APORTE EMPLEADOR</th>"+"</tr>"
    let elementoRol
    for (let i=0; i<roles.length;i++){
        elementoRol = roles[i]
        contenidoTabla+= 
        "<tr><td>"+elementoRol.cedula+"</td>"+
        "<td>"+elementoRol.nombre+"</td>"+
        "<td>"+elementoRol.valorAPagar+"</td>"+
        "<td>"+elementoRol.aporteEmpleado+"</td>"+
        "<td>"+elementoRol.aporteEmpleador+"</td></tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla
}

mostrarTotales = function(){
    let totalEmpleado = 0
    let totalEmpleador = 0
    let totalAPagar = 0
    let elemento= 0
    for(let i=0; i<roles.length; i++){
        elemento = roles[i]
        totalEmpleado+= elemento.aporteEmpleado
        totalEmpleador+= elemento.aporteEmpleador
        totalAPagar+= elemento.valorAPagar
    }
    mostrarTexto("infoAporteEmpresa",totalEmpleado)
    mostrarTexto("infoAporteEmpleado",totalEmpleador)
    mostrarTexto("infoTotalPago",totalAPagar)

    totalNomina = totalEmpleado+totalAPagar+totalEmpleador

    mostrarTexto("infoTotalNomina",totalNomina)
}