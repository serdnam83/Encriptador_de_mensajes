
function encriptar(mensajeOriginal) {
    
    let arregloOriginal = [];
    let arregloEncriptado = [];

    crearArray(mensajeOriginal, arregloOriginal);

    for (let value of arregloOriginal) {

        
        switch (value) {

            case "a":
                arregloEncriptado.push("ai");
                break;

            case "e":
                arregloEncriptado.push("enter");
                break;

            case "i":
                arregloEncriptado.push("imes");
                break;

            case "o":
                arregloEncriptado.push("ober");
                break;

            case "u":
                arregloEncriptado.push("ufat");
                break;
            
            default:
                arregloEncriptado.push(value);
        }               
        
    }       
    return arregloEncriptado.join("");   
}