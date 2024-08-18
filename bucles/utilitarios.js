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
esMayuscula = function(caracter){
    cascii = caracter.charCodeAt(0)
    if (cascii>=65 && cascii<= 90 ){
        return true
    }
    else {
        return false
    } 

}
