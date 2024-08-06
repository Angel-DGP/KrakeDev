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

