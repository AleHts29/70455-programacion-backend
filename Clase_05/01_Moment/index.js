const fs = require('fs') // 👈 lib Nativa de NODEJS
const moment = require('moment') // 👈 lib no es Nativa de NODEJS

const fyh = moment().format('YYYY-MM-DD HH:mm:ss');
const contenido = `Fecha y Hora actual: ${fyh}`

// console.log(contenido);

const nameFile = 'fecha_hora.txt';


fs.writeFile(nameFile, contenido, (err) => {
    if (err) {
        return console.error('Error writing file:', err);
    }
    console.log(`El archivo "${nameFile}" fue creado con éxito.`);


    // Leer
    fs.readFile(nameFile, 'utf8', (err, data) => {
        if (err) {
            return console.error('Error reading file:', err);
        }
        console.log(`Contenido del archivo "${nameFile}":\n${data}`);
    });
}) 
