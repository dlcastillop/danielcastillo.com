// Calcula y actualiza la edad
function setEdad() {
  let hoy = new Date();
  let dia = hoy.getDate();
  let mes = hoy.getMonth() + 1;
  let año = hoy.getFullYear();

  let edad;

  if ((dia >= 30 && mes == 5) || mes >= 6) {
    edad = año - 1996;
  } else {
    edad = año - 1996 - 1;
  }

  document.getElementsByTagName("li")[0].textContent = "👦 " + edad + " años";
}

// Cambia la frase basándose en la fecha
function fechasImportantes() {
  let hoy = new Date();
  let dia = hoy.getDate();
  let mes = hoy.getMonth() + 1;

  let mensaje;

  if (mes === 1 && dia === 1) {
    mensaje = "¡Feliz Año Nuevo!";
  } else if (mes === 12 && dia === 25) {
    mensaje = "¡Feliz Navidad!";
  } else {
    mensaje = "El futuro pertenece a los creadores";
  }

  document.getElementsByTagName("p")[0].textContent = mensaje;
}

setEdad();
fechasImportantes();
