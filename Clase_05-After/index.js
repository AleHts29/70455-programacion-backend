// importar UsersManager <-- class
const UsersManager = require('./UsersManager.js')


// crear la instancia
const userManager = new UsersManager()


// crear un usuario
const newUser = {
    nombre: 'Carla',
    apellido: 'Dutra',
    edad: 32,
    curso: 'ReactJS'
}



// funcion main - maneja logica  de negocio
async function main() {
    // ejecuto el metodo del clase UserManager.createUser()
    await userManager.createUser(newUser)


    // Consulta info que esta en el file .json, pero por medio de la clase UserManager
    const result = await userManager.consultarUsuarios()

    console.log(result);

}
main();