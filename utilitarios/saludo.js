saludar = function(){
    let name = recuperartxt("txtname")
    let lname= recuperartxt("txtlname")
    let edad = converInt("txtdad")
    let estatura = converfloat("txtesta")
    console.log("Hola "+ name+" " + lname+ ", tu edad es: " + edad + " y estatura: " + estatura)

    let msgWEL= "Bienvenido "+ name+" " + lname
    mostrartxt("lblresul",msgWEL)
    mostrarimg("idimg","./img/saludo.gif")
    mostrartxtbox("txtname","")
}

recuperartxt= function(idCMP){
    let cmp = document.getElementById(idCMP)
    let ving = cmp.value
    return ving
    }

converInt = function(idcmp){
    let vSTR = recuperartxt(idcmp)
    let vINT = parseInt(vSTR)
    return vINT
}

converfloat = function(idcmp){
    let vSTR = recuperartxt(idcmp)
    let vFloat = parseFloat(vSTR)
    return vFloat
}

mostrartxt = function(idcmp,msg){
    let txtcmp= document.getElementById(idcmp)
    txtcmp.innerText= msg   
}

mostrarimg = function(idcmp,rimg){
    let imgcmp = document.getElementById(idcmp)
    imgcmp.src= rimg
}

mostrartxtbox = function(idcmp,msg){
    let txtcmp= document.getElementById(idcmp)
    txtcmp.value= msg 
} 
