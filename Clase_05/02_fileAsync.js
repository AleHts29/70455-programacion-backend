/**
 * Fs Asincrono:
 * 
- writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
- readFile = Para obtener el contenido de un archivo. Como pide información, su callback es de la forma: (error, resultado)=>
- appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
- unlink = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
*/

const fs = require('fs');

const dirNameAsync = './files2'
const fileNameAsync = dirNameAsync + "/ejemploCallback.txt"

let data = 'Hola Coders, estoy en un archivo - utilizando callbacks...';



fs.mkdir(dirNameAsync, { recursive: true }, (error) => {
    if (error) throw Error("No se pudo crear el directorio base");


    // Escritura
    fs.writeFile(fileNameAsync, data, (error) => {
        if (error) throw Error("No se pudo escribir el archivo");
    })


    // Leer
    fs.readFile(fileNameAsync, 'utf8', (error, content) => {
        if (error) throw Error("No se pudo leer el archivo");
        console.log("Contenido: \n" + content);
        // Agregamos nuevo contido
        fs.appendFile(fileNameAsync, " - Mas contenido...", (error) => {
            if (error) throw Error("No se pudo agregar contenido al archivo");
            // lectura
            fs.readFile(fileNameAsync, 'utf8', (error, content2) => {
                if (error) throw Error("No se pudo leer el archivo");
                console.log("Contenido_02: \n" + content2);
                // Eliminar archivo
                fs.unlink(fileNameAsync, (error) => {
                    if (error) throw Error("No se pudo eliminar el archivo");
                })
            })

        })
    })
})
