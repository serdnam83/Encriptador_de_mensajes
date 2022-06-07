
function desencriptar(mensaje) {
    let arregloEncriptado = [];
    let resultado = [];

    crearArray(mensaje, arregloEncriptado);

    // verificamos la coincidencia con vocales de cada elemento
    // dentro del arreglo, si hay coincidencia ponemos la 
    //vocal dentro del array y corremos el posicionador i 
    // la cantidad de caracteres que tenga la keyword
    for (i = 0; i < arregloEncriptado.length; i++) {
        switch (arregloEncriptado[i]) {
            case "a":
                resultado.push("a");
                i = i + 1;
                break;

            case "e":
                resultado.push("e");
                i = i + 4;
                break;

            case "i":
                resultado.push("i");
                i = i + 3;
                break;

            case "o":
                resultado.push("o");
                i = i + 3;
                break;

            case "u":
                resultado.push("u");
                i = i + 3;
                break;

            default:
                resultado.push(arregloEncriptado[i]);
        }

        
    }
    console.log(resultado.join(""));
    return resultado.join("");
}



