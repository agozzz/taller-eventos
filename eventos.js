document.addEventListener("DOMContentLoaded", function() {

    const divBoton = document.querySelector(".container");
    
    function soyUnDiv() {
    alert("Hola! Soy el div");     
    }

divBoton.addEventListener("click", soyUnDiv);

});
