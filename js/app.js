function setEdad() {
    let hoy = new Date();
    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1;
    let año = hoy.getFullYear();

    let edad;

    if ((dia >= 30 && mes == 5) || (mes >= 6)) {
        edad = año-1996;
    }

    else {
        edad = año-1996-1;
    }

    document.getElementsByTagName("li")[0].textContent = "👦 " + edad + " años";
}

setEdad();