import express from 'express';
import __dirname from './util.js';
import mongoose from 'mongoose';
import * as dataOrders from './db/data.js'

import ordersModel from './models/orders.model.js';

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Declaración de Routers:


const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/pizzeria?retryWrites=true&w=majority');
        console.log("Conectado con exito a MongoDB usando Moongose.");

        // console.log("ESTO es la data: ", dataOrders.default);

        //01_ Damos de alta la iunfo de orders en la base de datos
        // await ordersModel.insertMany(dataOrders.default);


        // 02_ Listamos informacion de la base de datos
        // let orders = await ordersModel.find()
        // console.log("Ordenes en la BD: ", orders);



        /* =====================================
        =               Section  02           =
        ===================================== */
        reportesFunc()


    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();


let reportesFunc = async () => {
    let orders = await ordersModel.aggregate([

        //Stage 1: Filtrar las ordenes por tamaño, en este caso solo pizzas medianas:
        {
            $match: { size: "medium" }
        },

        //Stage 2: Agrupar por sabores y acumular el número de ejemplares de cada sabor:
        {
            $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } }
        },

        //Stage 3: Ordenar los documentos ya agrupados de mayor a menor.
        {
            $sort: { totalQuantity: -1 }
        },

        //Stage 4: Guardar todos los documentos generados de la agregacion en un nuevo documento 
        //         dentro de un arreglo. Para no dejarlos sueltos en la colección.
        //         $push indica que se guarda en un array, y $$ROOT inserta todo el documento.
        {
            $group: { _id: 1, orders: { $push: "$$ROOT" } }
        },


        //Stage 5: Creamos nuestro pryecto(documento) a partir del array de datos.
        {
            $project: {
                "_id": 0,
                orders: "$orders"
            }
        },



        //Stage FINAL (se crea una collection --> reports)
        {
            $merge: { into: "resportes_pizzas_2025" }
        }

    ])

    console.log("Resultados de la agregacion:");
    console.log(orders);
}