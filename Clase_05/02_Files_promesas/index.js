const fs = require('fs').promises // 👈 lib Nativa de NODEJS
const moment = require('moment') // 👈 lib no es Nativa de NODEJS


// Data 
const data = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    date: moment().format('YYYY-MM-DD'),
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
    },
    hobbies: ['reading', 'painting', 'cooking'],
    friends: [
        { name: 'Jane Smith', age: 28 },
        { name: 'Alice Johnson', age: 32 }
    ]
}

const nameFile = 'datos.json'


const escribirArchivoJSON = async (nameFile, data) => {
    try {
        // Conversion del obj a texto plano
        const jsonData = JSON.stringify(data, null, 2)

        fs.writeFile(nameFile, jsonData)

        console.log("Archivo creado de forma exitosa..");
    } catch (error) {
        console.error(`Error al escribir el archivo: ${error}`);
    }
}

const leerArchivoJSON = async (nameFile) => {
    try {
        const data = await fs.readFile(nameFile)

        const objData = JSON.parse(data)
        console.log("Contenido del archivo JSON:");
        console.log(objData);
    } catch (error) {
        console.error(`Error al leer el archivo: ${error}`);
    }
}

// func main
const main = async () => {
    // escribirArchivoJSON
    await escribirArchivoJSON(nameFile, data)

    // leerArchivoJSON
    await leerArchivoJSON(nameFile)
}

main()

