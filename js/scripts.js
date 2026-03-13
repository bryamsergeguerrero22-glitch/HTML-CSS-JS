
console.log("JavaScript conectado");
document.getElementById("Formulario_de_registro").addEventListener("submit", function(e){
    
    e.preventDefault();

    let nombre = document.getElementById("Nombreusuario").value;
    let correo = document.getElementById("Correo").value;
    let contraseña = document.getElementById("Contraseña").value;

    if(nombre === "" || correo === "" || contraseña ==="" ){
        alert("Todos los campos son obligatorios.");
    } 
    
    if(contraseña.length < 8){
        alert("La contraseña debe tener al menos 8 caracteres");
        return;
    }

    alert("Registro exitoso");
    
});

    const botonGenerar = document.getElementById("GenerarContraseña");
    const inputPassword = document.getElementById("Contraseña");

    botonGenerar.addEventListener("click", function(){

    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let contraseña = "";

    for(let i = 0; i < 10; i++){
        let random = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[random];
    }

    inputPassword.value = contraseña;
});

  const botonAgregar = document.getElementById("agregarTarea");
  const inputTarea = document.getElementById("nuevaTarea");
  const lista = document.getElementById("listaTareas");

  botonAgregar.addEventListener("click", function(){

    let tarea = inputTarea.value;

    if(tarea === ""){
        alert("Escribe una tarea");
        return;
    }

    let li = document.createElement("li");

    li.textContent = tarea;

    lista.appendChild(li);

    inputTarea.value = "";

});