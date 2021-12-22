// Calcula y actualiza la edad
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

// Activa/desactiva el modo oscuro
function modoOscuro() {
    let enlaces = document.getElementsByTagName("a");
    
    for(let i=0; i < enlaces.length; i++) {
        enlaces[i].classList.toggle("enlaces");
    }

    document.body.classList.toggle("general");
}

setEdad();
document.getElementById("switch-label").addEventListener("click", modoOscuro);