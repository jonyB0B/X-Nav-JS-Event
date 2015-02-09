function rellenarForm(){
  salida.style.backgroundColor = form.value;
}

var salida = document.getElementById("salida");
var form = document.getElementById("formulario");
form.addEventListener("input", rellenarForm);
