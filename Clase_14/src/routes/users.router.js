import { Router } from 'express';
import { userModel } from '../models/user.model.js'


const router = Router();


// APIs - CRUD
// GET - Listar todos
router.get('/', async (req, res) => {
    try {
        let users = await userModel.find()
        console.log(users);
        res.send({ result: "Success", payload: users })
    } catch (error) {
        console.error("No se pudo obtener usuarios con moongose: " + error);
        res.status(500).send({ error: "No se pudo obtener usuarios con moongose", message: error });
    }
})


// POST - Crear un user
router.post('/', async (req, res) => {
    try {
        let { first_name, last_name, email } = req.body;

        //TODO: Faltan Validaciones

        const newUser = { first_name, last_name, email }

        let user = await userModel.create(newUser)
        console.log(user);
        res.status(201).send({ result: "Success", payload: user })
    } catch (error) {
        console.error("No se pudo crear usuario con moongose: " + error);
        res.status(500).send({ error: "No se pudo crear usuario con moongose", message: error });
    }
})


// PUT - Actualizar un user
router.put('/:id', async (req, res) => {
    try {
        let userUpdated = req.body;
        let user = await userModel.updateOne({ _id: req.params.id }, userUpdated)
        console.log(user);
        res.status(202).send({ result: "Success", payload: user })
    } catch (error) {
        console.error("No se pudo actualizar usuario con moongose: " + error);
        res.status(500).send({ error: "No se pudo actualizar usuario con moongose", message: error });
    }
})


// DELETE - Eliminar un user

router.delete('/:id', async (req, res) => {
    try {
        let user = await userModel.deleteOne({ _id: req.params.id })
        console.log(user);
        res.send({ result: "Success", message: "Usuario eliminado" })
    } catch (error) {
        console.error("No se pudo eliminado usuario con moongose: " + error);
        res.status(500).send({ error: "No se pudo eliminado usuario con moongose", message: error });
    }
})


export default router;