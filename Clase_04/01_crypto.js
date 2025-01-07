const crypto = require('crypto');
const fs = require('fs');

class UsersManager {
    // Inicializamos el arreglo de usuarios como estático
    static usuarios = [];


    constructor() {
        if (fs.existsSync('usuarios.json')) {
            const data = fs.readFileSync('usuarios.json', 'utf8');
            UsersManager.usuarios = JSON.parse(data)
        }
    }



    // Método para agregar un usuario
    crearUsuario({ nombre, apellido, nombreUsuario, contrasena }) {
        // Hashear la contraseña usando SHA-256
        const hash = crypto.createHash('sha256').update(contrasena).digest('hex');
        // console.log(hash);


        // Crear un user con el password encript
        const newUser = {
            nombre,
            apellido,
            nombreUsuario,
            password: hash
        }

        // Agregar el usuario al arreglo estático
        UsersManager.usuarios.push(newUser)

        // Guardar en un archivo JSON para persistencia
        fs.writeFileSync('usuarios.json', JSON.stringify(UsersManager.usuarios, null, 2));

        console.log("Success");
    }

    // Método para mostrar todos los usuarios
    mostrarUsuarios() {
        console.log("Lista de usuarios");
        UsersManager.usuarios.forEach(user => {
            console.log(`${user.nombre} ${user.apellido} - ${user.nombreUsuario}`);
        });
    }

    // Método para validar usuario
    validarUsuario(nombreUsuario, contrasena) {
        // Buscar el usuario en el arreglo estático
        const user = UsersManager.usuarios.find(user => user.nombreUsuario === nombreUsuario)

        if (!user) {
            console.log("Usuario no encontrado");
            return;
        }

        // Hashear la contraseña ingresada y compararla con la almacenada
        const hash = crypto.createHash('sha256').update(contrasena).digest('hex');


        if (user.password === hash) {
            console.log("Usuario logueado");
        } else {
            console.log("Contraseña incorrecta");
        }
    }
}


const userManager = new UsersManager();

// Agregar un usuario
userManager.crearUsuario({
    nombre: 'Juan',
    apellido: 'Cafiero',
    nombreUsuario: 'juanC',
    contrasena: 'qwerty123'
})



// Mostrar todos los usuarios
userManager.mostrarUsuarios()



// // Validar usuario
userManager.validarUsuario('juanp', "1234") // logueado
userManager.validarUsuario('juanp', "qwe123") // Error - contraseña incorrecta