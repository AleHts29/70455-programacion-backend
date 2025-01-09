/**
 * Manejo de archivos usando NodeJs
 * Implementación usando nodejs:fs
 */

/**
 * Fs Sincrono:
 * 
    - writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
    - readFileSync = Para obtener el contenido de un archivo.
    - appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
    - unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
    - existsSync = Corrobora que un archivo exista!
*/

const fs = require('fs');

const dirName = './files'
const fileName = dirName + "/ejemplo.txt"

console.log("Generando escritura de archivos Sync con fileName: " + fileName);

if (!fs.existsSync(dirName)) fs.mkdirSync(dirName)
fs.writeFileSync(fileName, "Hola Coders, esto es un ejemplo!!!")



if (fs.existsSync(fileName)) {
    console.log("File already exists: " + fs.realpathSync(fileName));

    let contenido = fs.readFileSync(fileName, 'utf8')
    console.log("Contenido: \n" + contenido);

    // Agregamos mas contenido
    fs.appendFileSync(fileName, " - Mas contenido...")


    let constenido2 = fs.readFileSync(fileName, 'utf8')
    console.log("Contenido_02: \n" + constenido2);

}


