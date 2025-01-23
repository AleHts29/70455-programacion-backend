import { Router } from 'express';

const router = new Router();



// data en memoria --> simulando una DB
const users = []
// Obtener todos los usuarios - LISTAR
router.get('/', (req, res) => {
    res.send(users)
})


// Crear un nuevo usuario
router.post('/', (req, res) => {
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

    res.send({ status: 'success', message: `Usuario agregado con exitos - IdUser:${user.id}` })
})


// ACTUALIZAR
router.put('/:userId', (req, res) => {
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
router.delete('/:userId', (req, res) => {
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

export default router;