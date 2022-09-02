document.querySelector('#botoningresar').addEventListener('click', Ingresar);

function Ingresar(){
    var usuario = document.getElementById('correo').value;
    var contra = document.getElementById('contrasena').value;
    if(usuario == "admin@gmail.com" & contra == "1234"){
        window.open("agregarproducto.html");
    }
    else{
        alert ("Datos Incorrectos");
    }
}