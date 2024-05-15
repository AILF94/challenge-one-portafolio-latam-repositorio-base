//Haz tú validación en javascript acá
onsubmit= return validaciones();
// validacion nombre
function validación(){
    if (document.form.nombre.value.length==0){
        alert("Ingresar nombre");
        return false;
     }    
     else if (document.form.nombre.value.length>50){
        alert("Alcanzaste el limite de caracteres");
        return false;
     }
     return true;
}
// validacion correo
function validar_email(){
    var emailCampo=document.getElementsByName("email");
    var valEmail= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(valEmail.test(emailCampo.value)){
        alert("Correo invalido");
        return false;
    }
    return true;
}

// validacion asunto 
function validar_asunto(){
    if (document.form.asunto.value.length==0){
        alert("Ingresar Asunto");
        return false;
    
    }else if (document.form.asunto.value.length>50){
        alert("Alcanzaste el limite de caracteres");
        return false;
    }
    return true
}

// validacion mensaje
function valmensaje(){
    if (document.form.mensaje.value.length==0){
        alert("Ingresar Asunto");
        return false;
    
    }else if (document.form.mensaje.value.length>300){
        alert("Alcanzaste el limite de caracteres");
        return false;
    }
    return true
}

// funcion todos 
function validaciones(){
    validación();
    validar_email();
    validar_asunto();  
    valmensaje();
    
}