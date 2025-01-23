import { Router } from 'express';
import { uploader } from '../utils.js'

const router = new Router();


let pets = [];

// Obtener todos las mascotas - LISTAR
router.get('/', (req, res) => {
    res.send(pets)
})


// Crear
router.post('/', (req, res) => {
    let pet = req.body

    pet.id = Math.floor(Math.random() * 100 + 1)

    // validamos datos entrantes
    if (!pet.nombre || !pet.especie) {
        return res.status(400).send({ status: "error", msg: "valores incompletos, revisar datos de entrada!!" })
    }

    // agregamos el pet al array
    pets.push(pet)

    res.send({ status: 'success', message: 'Mascota agregada con exito' })
})


/* =====================================
=               MULTER                =
===================================== */
router.post("/profile", uploader.single('file'), (request, response) => {
    if (!request.file) {
        return response.status(400).send({ status: "error", mensaje: "No se adjunto archivo." });
    }
    console.log(request.file);

    // Persistimos una mascota con su foto
    let pet = request.body;
    pet.id = Math.floor(Math.random() * 20 + 1);
    pet.image = request.file.path;
    if (!pet.nombre || !pet.especie) {
        console.error("Mascota no es valida.");
        console.error(pet);
        response.status(400).send({ status: "Error", message: "Mascota invalida, verifique los datos de entrada." });
    } else {
        pets.push(pet);
        console.log(pets);
        response.send({ status: "Success", message: `Mascota agregada con exito, con ID: ${pet.id}` });
    }
});




export default router;