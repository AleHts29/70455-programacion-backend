import express from 'express';

const app = express();


// prepara la confiuguracion del servidor para trabajar con archivos JSON y urlencode
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = 9090;

app.get('/ping', (req, res) => {
    res.send("pong")
})


// Endpoints de USUARIOS

// data en memoria --> simulando una DB
const users = []


// Obtener todos los usuarios - LISTAR
app.get('/api/users', (req, res) => {
    res.send(users)
})


// Crear un nuevo usuario
app.post('/api/users', (req, res) => {
    // console.log(req.body);
    let user = req.body

    // validamos datos entrantes
    if (!user.first_name || !user.last_name) {
        return res.status(400).send({ status: "error", msg: "valores incompletos, revisar datos de entrada!!" })
    }


    // asignamos un ID al user
    const numRandom = Math.floor(Math.random() * 100 + 1)
    // console.log(numRandom);
    user.id = numRandom + users.length;



    // agregamos el user al array
    users.push(user)

    res.send(user)
})


// ACTUALIZAR
app.put('/api/users/:userId', (req, res) => {
    let userId = parseInt(req.params.userId)
    let userUpdate = req.body


    // buscamos el user por ID
    const userPosition = users.findIndex((u => u.id === userId))

    if (userPosition < 0) {
        return res.status(404).send("No se encontró el usuario")
    }

    // actualizamos el user
    users[userPosition] = userUpdate

    res.send(userUpdate)
})


// DELETE
app.delete('/api/users/:userId', (req, res) => {
    let userId = parseInt(req.params.userId)


    // buscamos el user por ID
    const userPosition = users.findIndex((u => u.id === userId))

    if (userPosition < 0) {
        return res.status(404).send("No se encontró el usuario")
    }

    // Eliminamos el user
    users.splice(userPosition, 1)

    res.send("Usuario eliminado")
})






// la escucha del puerto de comunicacion
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});