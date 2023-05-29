function validacion(){
    var Nombre = document.getElementById("nombre").value;
    if (Nombre==""){
        document.getElementById("alerta").innerHTML = "Es necesario que ingrese un nombre valido."
    }else{
        document.getElementById("alerta").innerHTML = " "

    }

    var Correo = document.querySelector('#correo');
    var correcto=false;

    if(Correo.match(/@/)){
        document.getElementById("alerta_correo").innerHTML = ""
    } else {
        document.getElementById("alerta_correo").innerHTML = "Es necesario que ingrese un correo electronico."
    }

    // if(Correo!=""){
    //     if(x =="@"){
    //         correcto=true;
    //         document.getElementById("alerta_correo").innerHTML = ""
    //     }

    //     if(correcto==false){
    //         document.getElementById("alerta_correo").innerHTML = "Es necesario que ingrese un correo electronico valido."
    //     }
    // }

}
