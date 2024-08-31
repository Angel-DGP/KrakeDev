personas = [
    {nombre : "Marcos",edad : 18},
    {nombre : "Roberto", edad : 15},
    {nombre : "Kate", edad : 25},
    {nombre : "Diana", edad : 12},
    {nombre : "Benja", edad : 5}
]

agregarPersona = function(){
    Name = recuperarTexto("txtName")
    iscorrectN = validarNombre(Name,"lblErrorName")
    Age = recuperarInt("txtAge")
    iscorrectA = validarEdad(Age,"lblErrorAge")
    if(iscorrectN==true & iscorrectA == true){
        let nuevaPersona = {}
        nuevaPersona.nombre = Name
        nuevaPersona.edad = Age
        personas.push(nuevaPersona)
        alert("PERSONA AGREGADA CORRECTAMENTE")
    }
    mostrarTabla()
}
validarNombre = function(nameF,lblError){
    let boo = false
    if(nameF.length>=3){boo = true
        mostrarTexto(lblError,"")
    }
    else{mostrarTexto(lblError,"INGRESE UN NOMBRE VALIDO (+3 CARACTERES)")}
    return boo
}

validarEdad = function(Age,lblError){
    let boo = false
    if(isNaN(Age)==false){
        if(Age>=0&Age<=100){
            mostrarTexto(lblError,"")
            boo = true
        }
        else{mostrarTexto(lblError,"INGRESE UN VALOR VALIDO (0-100)")}}
    else{mostrarTexto(lblError,"INGRESE UN NUMERO ENTERO")}
    return boo
}

mostrarTabla = function(){
    let cmpTabla = document.getElementById("tablaPersonas")
    let contenidoTabla = "<table><tr>"+"<th>NOMBRE</th>"+"<th>EDAD</th>"+"</tr>"
    for(let i = 0;i<personas.length;i++){
        let personaIterada = personas[i]
        contenidoTabla+= "<tr>"+"<td>"+personaIterada.nombre+"</td>"+"<td>"+personaIterada.edad+"</td>"+"</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML=contenidoTabla
}

encontrarMayor = function(){
    let personaMayor = personas[0]
    let elementoPersona
    for(let i = 1; i<personas.length;i++){
        elementoPersona = personas[i]
        if(personaMayor.edad<elementoPersona.edad){
            personaMayor = elementoPersona
        }
    }
    return personaMayor
}
determinarMayor = function(){
    mayor = encontrarMayor()
    
    mostrarTexto("lbltxtMayor","LA PERSONA MAYOR ES:")
    mostrarTexto("lblMayor","NOMBRE: "+mayor.nombre +"\nEDAD: "+mayor.edad)

}

encontrarMenor = function(){
    let personaMenor = personas[0]
    let elementoPersona
    for(let i = 1; i<personas.length;i++){
        elementoPersona = personas[i]
        if(personaMenor.edad>elementoPersona.edad){
            personaMenor = elementoPersona
        }
    }
    return personaMenor
}
determinarMenor = function(){
    menor = encontrarMenor()
    mostrarTexto("lbltxtMenor","LA PERSONA MENOR ES:")
    mostrarTexto("lblMenor","NOMBRE: "+menor.nombre +"\nEDAD: "+menor.edad)

}