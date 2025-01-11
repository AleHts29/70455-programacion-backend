const fs = require('fs').promises;
const path = require('path');

class UsersManager {
    // constructor
    constructor() {
        this.filePath = path.join(__dirname, "/db/Usuarios.json")
    }


    // Metodos
    async createUser(data) {
        try {
            // Leer el archivo si existe, de lo contrario inicializar un arreglo vacío
            let usuarios = []
            try {
                const result = await fs.readFile(this.filePath)
                console.log("result", result);
                if (result != "") {
                    usuarios = JSON.parse(result)
                }
            } catch (error) {
                console.log(" Couldn't read");
            }


            // Genrar un id
            const id = usuarios.length + 1

            // Añadir el id al nuevo usuario
            data.id = id

            // agregamos el user al array 
            usuarios.push(data)


            // Añadir el nuevo usuario al arreglo
            await fs.writeFile(this.filePath, JSON.stringify(usuarios, null, 2), 'utf8');

            console.log("Se agrego el user de forma exitosa");

        } catch (error) {
            console.error("Error: " + error);
        }
    }

    async consultarUsuarios() {
        try {
            const data = await fs.readFile(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error(`Error al consultar usuarios: ${error}`);
        }
    }
}



module.exports = UsersManager; // 👈 No olvidar exportar


/*
Rutas

# ruta absoluta
/Users/ale-hts/Coffee_Coder/CoderHouse/BackEnd/70155_Comision
 __dirname=/Users/ale-hts/Coffee_Coder/CoderHouse/BackEnd/70455_Comision/Clase_05-After/+"db/Usuarios.json"

 */