let botonDesencriptar = document.querySelector("#desencriptar");
let botonEncriptar = document.querySelector("#encriptar");
let botonCopiar = document.querySelector("#copiar");
let salida = document.querySelector("#salida");
let input = document.querySelector("#entrada");
let regExp = /[^a-z ñ]/g;

input.addEventListener("input", check);

botonEncriptar.addEventListener("click", function () {
    let mensajeOriginal = document.querySelector(".message").value;
    let mensajeEncriptado = encriptar(mensajeOriginal);
    let mostrarEncriptado = mostrarResultado(mensajeEncriptado);
    let reset = borrarTexto("#entrada");
})

botonDesencriptar.addEventListener("click", function () {
    let mensaje = document.querySelector(".message").value;
    let mensajeDesencriptado = desencriptar(mensaje);
    let mostrarDesencriptado = mostrarResultado(mensajeDesencriptado);
    //let reset = borrarTexto("#entrada");
})

botonCopiar.addEventListener("click", function () {
    let copiarEncriptado = copiar();
    let reset = borrarTexto("#salida");
})

function crearArray(string, array) {
    for (let i of string) {
        array.push(i);
    }
}

function mostrarResultado(mensaje) {
    let detective = document.querySelector(".imagen");
    let h2 = document.querySelector(".texto_imagen");
    detective.classList.add("invisible");
    h2.classList.add("invisible");
    salida.classList.remove("invisible");
    salida.value = mensaje;
    return salida;
}

function copiar() {
    salida.select();
    document.execCommand('copy');

    alert("Copiado!");
}

function borrarTexto(id) {
    document.querySelector(id).value = "";
}

function check(e) {
    if (regExp.test(e.srcElement.value)) {
        alert("Solo letras minusculas");
        e.srcElement.value = "";
    }

}

