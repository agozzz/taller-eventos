document.addEventListener("DOMContentLoaded", function() {

    const divBoton = document.querySelector(".container");
    const boton = document.getElementById("saludar");
    
    
    function soyUnDiv() {
    alert("Hola! Soy el div");     
    }
    
    function saludo(event) {
    event.stopPropagation();
    alert("¡Hola!");
    }


    divBoton.addEventListener("click", soyUnDiv);
    boton.addEventListener("click", saludo);

});










