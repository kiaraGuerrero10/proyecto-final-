window.addEventListener("load", () => {
    // para confirmar el acceso antes de entrar a cada una de las secciones de las zapatillas
    var entrar = confirm("¿Quieres entrar a la sección de zapatillas?");
    // te apareceran 2 opciones directamente que vendrian a ser un (true/false)
    
    //CONDICIÓN
    if (entrar) {
    // Al presionar aceptar (entrar es true) se va a mostrar el contenido de la sección
        document.body.style.display = "block";
        
    } else {
        // si se da en cancelar (cancelar es false) se va a redigir a la página general 
        window.location.href = "index.html";
    }
});