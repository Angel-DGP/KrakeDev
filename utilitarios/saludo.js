recuperartxt= function(idCMP){
let cmp = document.getElementById(idCMP)
let ving = cmp.value
return ving
}
saludar = function(){
    let name = recuperartxt("txtname")
    let lname= recuperartxt("txtlname")
    console.log("Hola "+ name+" " + lname)
}