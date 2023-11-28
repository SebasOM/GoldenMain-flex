let botonFormulario=document.getElementById("bienvenido")
botonFormulario.addEventListener("click",function(){
    let nombre=document.getElementById("usuario")
    Swal.fire({
        title: "Genial!",
        text: "Bienvenido a Golden care!",
        icon: "success"
      });

})
